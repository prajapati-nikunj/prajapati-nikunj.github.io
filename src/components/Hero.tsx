import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaChevronDown } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Content */}
            <div className="relative z-10 container-custom px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image with Graphic */}
                    <motion.div
                        className="relative flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Decorative Graphic Behind */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-[2rem] rotate-6 opacity-30 blur-lg animate-pulse"></div>
                            <div className="absolute -inset-4 bg-gradient-to-bl from-secondary-500 to-primary-500 rounded-[2rem] -rotate-6 opacity-30 blur-lg animate-pulse delay-75"></div>

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/profile.jpg"
                                    alt="Nikunj Prajapati"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <span className="text-2xl">🚀</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column: Text Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-primary-400 font-semibold mb-4 uppercase tracking-wider text-sm md:text-base">
                                Welcome to my portfolio
                            </p>
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="gradient-text">{personalInfo.name}</span>
                        </motion.h1>

                        <motion.p
                            className="text-2xl md:text-3xl lg:text-4xl dark:text-gray-300 light:text-gray-700 mb-6 font-display"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {personalInfo.title}
                        </motion.p>

                        <motion.p
                            className="text-lg md:text-xl dark:text-gray-400 light:text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {personalInfo.summary}
                        </motion.p>

                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-6 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:text-gray-400 dark:hover:text-primary-400 light:text-gray-600 light:hover:text-primary-600 transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={28} />
                            </a>
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:text-gray-400 dark:hover:text-primary-400 light:text-gray-600 light:hover:text-primary-600 transition-colors duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub size={28} />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <a href="#about" className="dark:text-gray-400 dark:hover:text-primary-400 light:text-gray-600 light:hover:text-primary-600 transition-colors">
                        <FaChevronDown size={24} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
