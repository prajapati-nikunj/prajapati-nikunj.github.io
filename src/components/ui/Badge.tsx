import { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'primary' | 'secondary' | 'accent';
    className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
    const variants = {
        default: 'bg-white/10 text-gray-200 border-white/20',
        primary: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
        secondary: 'bg-secondary-500/20 text-secondary-300 border-secondary-500/30',
        accent: 'bg-accent-500/20 text-accent-300 border-accent-500/30',
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}
