import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';

export default function PublicPortfolio() {
    const publicProjects = [
        {
            name: 'Essentials',
            url: 'https://github.com/prajapati-nikunj/Essentials',
            description: 'A comprehensive collection of essential SwiftUI Controls and Indicators',
            tags: ['SwiftUI', 'iOS26', 'Open Source', 'GitHub']
        },
        {
            name: 'Portfolio Version 1',
            url: 'https://github.com/prajapati-nikunj/prajapati-nikunj.github.io',
            description: 'Version 1 - Built with Flutter Web',
            tags: ['Flutter Web', 'Portfolio']
        }
    ];

    return (
        <Section id="projects" title="Public Portfolio" subtitle="Open Source & Public Projects">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                {publicProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col hover:ring-2 hover:ring-primary-500 transition-all duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <FaGithub className="text-primary-400" size={24} />
                                    <h3 className="text-xl font-bold dark:text-white light:text-gray-900">
                                        {project.name}
                                    </h3>
                                </div>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-400 hover:text-primary-300 transition-colors"
                                    aria-label={`Visit ${project.name} on GitHub`}
                                >
                                    <FaExternalLinkAlt size={18} />
                                </a>
                            </div>

                            <p className="dark:text-gray-400 light:text-gray-600 mb-4 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex gap-2 flex-wrap">
                                {project.tags.map((tag, idx) => (
                                    <Badge key={idx} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
                            >
                                View on GitHub
                                <FaExternalLinkAlt size={14} />
                            </a>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Coming Soon Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Card className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-4">
                        <span className="text-3xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white light:text-gray-900">
                        More Coming Soon
                    </h3>
                    <p className="dark:text-gray-400 light:text-gray-600">
                        Additional public projects and open-source contributions will be added here
                    </p>
                </Card>
            </motion.div>
        </Section>
    );
}
