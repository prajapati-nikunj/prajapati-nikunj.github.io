import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    href?: string;
    className?: string;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    target?: string;
    rel?: string;
    download?: string;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    href,
    className = '',
    type = 'button',
    target,
    rel,
    download
}: ButtonProps) {
    const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2';

    const variants = {
        primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50',
        secondary: 'bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm',
        outline: 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                target={target || (href.startsWith('http') ? '_blank' : undefined)}
                rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
                download={download}
            >
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={classes} type={type}>
            {children}
        </button>
    );
}
