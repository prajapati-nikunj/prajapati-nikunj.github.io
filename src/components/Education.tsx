import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa';
import { education, certifications, awards } from '../data/portfolio';
import Section from './ui/Section';
import Card from './ui/Card';
import Badge from './ui/Badge';

export default function Education() {
    return (
        <Section id="education" title="Education & Achievements" subtitle="Learning & Recognition">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Education */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <FaGraduationCap className="text-primary-400" />
                        <span>Education</span>
                    </h3>
                    <div className="space-y-4">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card>
                                    <h4 className="font-bold text-lg mb-2">{edu.degree}</h4>
                                    <p className="text-primary-400 text-sm mb-1">{edu.institution}</p>
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>{edu.duration}</span>
                                        <Badge variant="primary" className="text-xs">{edu.grade}</Badge>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <FaCertificate className="text-secondary-400" />
                        <span>Certifications</span>
                    </h3>
                    <div className="space-y-3">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <Card className="p-4">
                                    <p className="font-medium text-sm mb-1">{cert.name}</p>
                                    <p className="text-xs text-gray-500">{cert.issuer}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Awards */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <FaTrophy className="text-accent-400" />
                        <span>Awards</span>
                    </h3>
                    <div className="space-y-4">
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card>
                                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                                        🏆 {award.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm">{award.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
