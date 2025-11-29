import { useEffect } from 'react';
import ReactGA from 'react-ga4';

// Access the environment variable
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
        ReactGA.initialize(GA_MEASUREMENT_ID);
    }
};

export const logPageView = () => {
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
        ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
    }
};

export const logEvent = (category: string, action: string, label?: string, value?: number) => {
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
        ReactGA.event({
            category,
            action,
            label,
            value,
        });
    }
};

const GoogleAnalytics = () => {
    useEffect(() => {
        initGA();
        logPageView();

        // Log page visibility changes
        const handleVisibilityChange = () => {
            if (!document.hidden) {
                logPageView();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return null;
};

export default GoogleAnalytics;
