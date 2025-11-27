import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';

// Simple password - in production, this should be secured properly
const PROJECT_PASSWORD = 'nikunj2024';

export default function ProtectedProjects() {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (password === PROJECT_PASSWORD) {
            setIsUnlocked(true);
            setError('');
        } else {
            setError('Incorrect password. Please try again or contact me for access.');
            setPassword('');
        }
    };

    const handleRequestAccess = () => {
        window.location.href = 'mailto:nikunjprajapati09@gmail.com?subject=Request Access to Projects Portfolio';
    };

    if (!isUnlocked) {
        return (
            <Section id="projects" title="Projects" subtitle="Protected Portfolio">
                <motion.div
                    className="max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Card className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-6">
                            <FaLock className="text-primary-400" size={32} />
                        </div>

                        <h3 className="text-2xl font-bold mb-4 dark:text-white light:text-gray-900">
                            Projects Portfolio
                        </h3>

                        <p className="dark:text-gray-400 light:text-gray-600 mb-6">
                            This section contains confidential project information.
                            Please enter the password to view or request access via email.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className="w-full px-4 py-3 dark:bg-white/10 light:bg-gray-100 border dark:border-white/20 light:border-gray-300 rounded-lg dark:text-white light:text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500 pr-12"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition-colors"
                                >
                                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                </button>
                            </div>

                            <AnimatePresence>
                                {error && (
                                    <motion.p
                                        className="text-red-400 text-sm"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        {error}
                                    </motion.p>
                                )}
                            </AnimatePresence>

                            <div className="flex flex-col gap-3">
                                <Button type="submit" variant="primary" className="w-full">
                                    Unlock Projects
                                </Button>

                                <button
                                    type="button"
                                    onClick={handleRequestAccess}
                                    className="text-sm dark:text-gray-400 light:text-gray-600 hover:text-primary-400 transition-colors"
                                >
                                    Don't have access? Request via email →
                                </button>
                            </div>
                        </form>
                    </Card>
                </motion.div>
            </Section>
        );
    }

    return (
        <Section id="projects" title="Projects" subtitle="My work portfolio">
            <div className="mb-8 flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category
                                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                                : 'dark:bg-white/5 light:bg-gray-100 dark:text-gray-300 light:text-gray-700 dark:hover:bg-white/10 light:hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className={`h-full flex flex-col ${project.featured ? 'ring-2 ring-primary-500' : ''}`}>
                            <div className="flex justify-between items-start mb-4">
                                <Badge variant={project.featured ? 'primary' : 'secondary'}>
                                    {project.category}
                                </Badge>
                                {project.featured && (
                                    <span className="text-yellow-400 text-xl">⭐</span>
                                )}
                            </div>

                            <h3 className="text-xl font-bold mb-2 dark:text-white light:text-gray-900">{project.name}</h3>

                            <div className="flex gap-2 mb-3 flex-wrap">
                                <Badge variant="accent">{project.year}</Badge>
                                <Badge variant="secondary">{project.company}</Badge>
                            </div>

                            <p className="dark:text-gray-400 light:text-gray-600 mb-4 flex-grow">{project.description}</p>

                            <div className="space-y-2 mb-4">
                                {project.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                        <span className="text-primary-400 mt-1">•</span>
                                        <span className="dark:text-gray-300 light:text-gray-700 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {project.appStoreLink && (
                                <Button
                                    href={project.appStoreLink}
                                    variant="secondary"
                                    className="w-full mt-auto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                                    </svg>
                                    App Store
                                </Button>
                            )}
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
