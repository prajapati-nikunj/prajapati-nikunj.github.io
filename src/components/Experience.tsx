import { motion } from 'framer-motion';
import { FaBuilding, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences } from '../data/portfolio';
import Section from './ui/Section';
import Card from './ui/Card';

export default function Experience() {
    return (
        <Section id="experience" title="Work Experience" subtitle="My professional journey">
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500"></div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-gray-950 z-10"></div>

                            {/* Content */}
                            <div className="md:w-1/2 ml-8 md:ml-0">
                                <Card className="h-full">
                                    <h3 className="text-2xl font-bold mb-2 gradient-text">{exp.title}</h3>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                                        <span className="flex items-center gap-2">
                                            <FaBuilding className="text-primary-400" />
                                            {exp.company}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <FaCalendar className="text-primary-400" />
                                            {exp.duration}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <FaMapMarkerAlt className="text-primary-400" />
                                            {exp.location}
                                        </span>
                                    </div>

                                    <p className="text-gray-300 mb-4 italic">{exp.description}</p>

                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                                                <span className="text-primary-400 mt-1">•</span>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block md:w-1/2"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
