import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaApple } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';

export default function Projects() {
    const categories = Array.from(new Set(projects.map(p => p.category)));
    const [activeFilter, setActiveFilter] = useState<string>('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    // Sort to show featured first
    const sortedProjects = [...filteredProjects].sort((a, b) =>
        (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    );

    return (
        <Section id="projects" title="Featured Projects" subtitle="What I've built">
            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                <button
                    onClick={() => setActiveFilter('All')}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === 'All'
                            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10'
                        }`}
                >
                    All Projects
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProjects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className={`h-full flex flex-col ${project.featured ? 'ring-2 ring-primary-500/50' : ''}`}>
                            {project.featured && (
                                <Badge variant="primary" className="mb-3 w-fit">
                                    ⭐ Featured
                                </Badge>
                            )}

                            <h3 className="text-xl font-bold mb-2 gradient-text">{project.name}</h3>

                            <div className="flex flex-wrap gap-2 mb-3">
                                <Badge variant="default" className="text-xs">{project.category}</Badge>
                                <Badge variant="secondary" className="text-xs">{project.year}</Badge>
                                <Badge variant="accent" className="text-xs">{project.company}</Badge>
                            </div>

                            <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                            <ul className="space-y-1 mb-4">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-500 text-xs">
                                        <span className="text-primary-400">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {project.appStoreLink && (
                                <a
                                    href={project.appStoreLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-500/20 hover:bg-primary-500/30 text-primary-300 rounded-lg transition-colors duration-300 border border-primary-500/30"
                                >
                                    <FaApple size={18} />
                                    <span className="text-sm font-medium">View on App Store</span>
                                    <FaExternalLinkAlt size={12} />
                                </a>
                            )}
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
