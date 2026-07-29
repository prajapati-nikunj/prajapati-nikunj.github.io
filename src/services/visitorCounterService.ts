import { doc, getDoc, setDoc, updateDoc, onSnapshot, increment } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

const COUNTER_DOC_PATH = 'visitors/counter';

/**
 * Increments the visitor count in Firestore
 * Only increments once per browser session to prevent bot abuse
 */
export const incrementVisitorCount = async (): Promise<void> => {
    try {
        // Check if this session already counted
        const SESSION_KEY = 'visitor_counted_session';
        const hasCountedThisSession = sessionStorage.getItem(SESSION_KEY);

        if (hasCountedThisSession) {
            console.log('Visitor already counted in this session');
            return;
        }

        const counterRef = doc(db, COUNTER_DOC_PATH);
        const counterDoc = await getDoc(counterRef);

        if (!counterDoc.exists()) {
            // Initialize the counter if it doesn't exist
            await setDoc(counterRef, { count: 1 });
        } else {
            // Increment the counter
            await updateDoc(counterRef, {
                count: increment(1),
            });
        }

        // Mark this session as counted
        sessionStorage.setItem(SESSION_KEY, 'true');
        console.log('Visitor count incremented successfully');
    } catch (error) {
        console.error('Error incrementing visitor count:', error);
        throw error;
    }
};

/**
 * Subscribe to real-time visitor count updates
 * @param callback Function to call with the updated count
 * @returns Unsubscribe function
 */
export const subscribeToVisitorCount = (callback: (count: number) => void): (() => void) => {
    const counterRef = doc(db, COUNTER_DOC_PATH);

    const unsubscribe = onSnapshot(
        counterRef,
        (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.data();
                callback(data?.count || 0);
            } else {
                callback(0);
            }
        },
        (error) => {
            console.error('Error listening to visitor count:', error);
            callback(0);
        }
    );

    return unsubscribe;
};

/**
 * Get the current visitor count once (no real-time updates)
 */
export const getVisitorCount = async (): Promise<number> => {
    try {
        const counterRef = doc(db, COUNTER_DOC_PATH);
        const counterDoc = await getDoc(counterRef);

        if (counterDoc.exists()) {
            return counterDoc.data()?.count || 0;
        }
        return 0;
    } catch (error) {
        console.error('Error getting visitor count:', error);
        return 0;
    }
};
