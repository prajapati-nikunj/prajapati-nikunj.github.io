import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaTrophy } from 'react-icons/fa';
import { personalInfo, strengths, quickStats } from '../data/portfolio';
import Section from './ui/Section';
import Card from './ui/Card';

export default function About() {
    const stats = [
        { icon: FaBriefcase, value: quickStats.yearsExperience, label: 'Years Experience' },
        { icon: FaCode, value: quickStats.projectsDelivered, label: 'Projects Delivered' },
        { icon: FaTrophy, value: quickStats.domainsMastered, label: 'Domains Mastered' },
    ];

    return (
        <Section id="about" title="About Me" subtitle="Get to know me">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* Summary */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold mb-4 font-display">Professional Summary</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        {personalInfo.summary}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        I'm a highly proficient technical expert with a proven track record in iOS development,
                        specializing in Swift, SwiftUI, and modern mobile architectures. I excel at leading teams,
                        conducting code reviews, and delivering innovative solutions that drive business success.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-1 gap-6"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {stats.map((stat, index) => (
                        <Card key={index} className="flex items-center gap-4">
                            <div className="p-4 bg-primary-500/20 rounded-lg">
                                <stat.icon className="text-primary-400" size={32} />
                            </div>
                            <div>
                                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                                <p className="text-gray-400">{stat.label}</p>
                            </div>
                        </Card>
                    ))}
                </motion.div>
            </div>

            {/* Strengths */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {strengths.map((strength, index) => (
                    <Card key={index}>
                        <h4 className="text-xl font-bold mb-3 text-primary-400">{strength.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{strength.description}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
