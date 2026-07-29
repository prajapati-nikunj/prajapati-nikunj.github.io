import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    title?: string;
    subtitle?: string;
}

export default function Section({ children, id, className = '', title, subtitle }: SectionProps) {
    return (
        <section id={id} className={`section-padding ${className}`}>
            <div className="container-custom">
                {(title || subtitle) && (
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {subtitle && (
                            <p className="text-primary-400 font-semibold mb-2 uppercase tracking-wider text-sm">
                                {subtitle}
                            </p>
                        )}
                        {title && (
                            <h2 className="text-4xl md:text-5xl font-bold font-display">
                                {title}
                            </h2>
                        )}
                    </motion.div>
                )}
                {children}
            </div>
        </section>
    );
}
