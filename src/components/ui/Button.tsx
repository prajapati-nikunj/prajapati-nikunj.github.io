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

    // Treat anything that leaves this origin as external. Checking for a leading
    // "http" missed protocol-relative URLs ("//host"), which would have opened in
    // the same tab with no rel — and would not have been flagged as external at
    // all. Every href today is static data, so this is defence against a future
    // dynamic href rather than a live bug.
    const isExternal = href ? /^(https?:)?\/\//i.test(href) : false;

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                target={target || (isExternal ? '_blank' : undefined)}
                rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
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
