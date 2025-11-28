import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaUsers, FaChartLine } from 'react-icons/fa';

// Animated Digit Component
const AnimatedDigit = ({ digit, delay }: { digit: string; delay: number }) => {
    return (
        <motion.div
            className="relative overflow-hidden"
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: delay * 0.1,
            }}
        >
            <motion.div
                className="relative flex items-center justify-center w-10 h-14 sm:w-12 sm:h-16 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-white/10 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-secondary-400/30 blur-lg" />

                {/* Digit */}
                <motion.span
                    className="relative text-3xl sm:text-4xl font-bold bg-gradient-to-br from-primary-300 via-primary-400 to-secondary-400 bg-clip-text text-transparent"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                        delay: delay * 0.1 + 0.1,
                    }}
                >
                    {digit}
                </motion.span>

                {/* Shine effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        delay: delay * 0.1,
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getVisitorCount = async () => {
            try {
                const STORAGE_KEY = 'portfolio_visitor_count';
                const LAST_VISIT_KEY = 'portfolio_last_visit';

                const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
                const now = Date.now();
                const oneDayInMs = 24 * 60 * 60 * 1000;

                let currentCount = parseInt(localStorage.getItem(STORAGE_KEY) || '0');

                if (!lastVisit || (now - parseInt(lastVisit)) > oneDayInMs) {
                    currentCount += 1;
                    localStorage.setItem(STORAGE_KEY, currentCount.toString());
                    localStorage.setItem(LAST_VISIT_KEY, now.toString());
                }

                // Example with CountAPI (uncomment to use):
                /*
                const response = await fetch('https://api.countapi.xyz/hit/prajapati-nikunj.github.io/visits');
                const data = await response.json();
                currentCount = data.value;
                */

                setVisitorCount(currentCount);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch visitor count:', error);
                setVisitorCount(0);
                setIsLoading(false);
            }
        };

        getVisitorCount();
    }, []);

    // Format number to always have at least 5 digits
    const formatNumber = (num: number) => {
        return num.toString().padStart(5, '0');
    };

    if (isLoading) {
        return (
            <motion.div
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div className="w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-sm dark:text-gray-400 light:text-gray-600">
                    Loading visitor stats...
                </span>
            </motion.div>
        );
    }

    const digits = visitorCount !== null ? formatNumber(visitorCount).split('') : ['0', '0', '0', '0', '0'];

    return (
        <motion.div
            className="flex flex-col items-center gap-4 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Main Counter Card */}
            <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                {/* Background glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-primary-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Main card */}
                <div className="relative bg-white/5 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl">
                    {/* Floating particles */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-primary-400/50 rounded-full"
                                initial={{
                                    x: Math.random() * 300,
                                    y: Math.random() * 100,
                                }}
                                animate={{
                                    y: [null, Math.random() * -50, Math.random() * 100],
                                    opacity: [0.2, 0.8, 0.2],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: i * 0.5,
                                }}
                            />
                        ))}
                    </div>

                    {/* Header */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <motion.div
                            className="p-2 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm"
                            animate={{
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                            }}
                        >
                            <FaEye className="text-primary-400" size={20} />
                        </motion.div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase dark:text-gray-300 light:text-gray-700">
                            Total Visitors
                        </h3>
                    </div>

                    {/* Digit Display */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <AnimatePresence mode="wait">
                            {digits.map((digit, index) => (
                                <AnimatedDigit key={`${digit}-${index}`} digit={digit} delay={index} />
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Stats Bar */}
                    <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/10">
                        <motion.div
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        >
                            <FaUsers className="text-primary-400" size={12} />
                            <span className="text-xs font-medium dark:text-gray-400 light:text-gray-600">
                                24h Unique
                            </span>
                        </motion.div>
                        <motion.div
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        >
                            <FaChartLine className="text-secondary-400" size={12} />
                            <span className="text-xs font-medium dark:text-gray-400 light:text-gray-600">
                                Growing
                            </span>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Thank you message */}
            <motion.p
                className="text-xs dark:text-gray-500 light:text-gray-600 text-center max-w-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                Thank you for being visitor #{visitorCount?.toLocaleString('en-US')} 🎉
            </motion.p>
        </motion.div>
    );
};

export default VisitorCounter;
