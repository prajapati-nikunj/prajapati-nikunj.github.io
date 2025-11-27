import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import Section from './ui/Section';
import Card from './ui/Card';

export default function Contact() {
    const contactInfo = [
        { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location },
    ];

    const socialLinks = [
        { icon: FaLinkedin, label: 'LinkedIn', href: personalInfo.linkedin, color: 'text-blue-400' },
        { icon: FaGithub, label: 'GitHub', href: personalInfo.github, color: 'text-gray-400' },
    ];

    return (
        <Section id="contact" title="Get In Touch" subtitle="Let's work together">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xl dark:text-gray-300 light:text-gray-700 mb-8">
                        I'm always interested in hearing about new projects and opportunities.
                        Feel free to reach out via email!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg mb-4">
                                    <info.icon className="text-primary-400" size={24} />
                                </div>
                                <h4 className="font-semibold mb-2">{info.label}</h4>
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        className="text-gray-400 hover:text-primary-400 transition-colors text-sm break-all"
                                    >
                                        {info.value}
                                    </a>
                                ) : (
                                    <p className="text-gray-400 text-sm">{info.value}</p>
                                )}
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="flex flex-col items-center gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {/* Social links */}
                    <div className="flex gap-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20 ${social.color}`}
                            >
                                <social.icon size={20} />
                                <span>{social.label}</span>
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons Hidden */}
                    {/* <div className="flex flex-wrap justify-center gap-4">
                        <Button href={`mailto:${personalInfo.email}`} variant="primary" size="lg">
                            <FaEnvelope />
                            Send Email
                        </Button>
                        <Button href="#" variant="secondary" size="lg">
                            <FaDownload />
                            Download Resume
                        </Button>
                    </div> */}
                </motion.div>
            </div>
        </Section>
    );
}
