import { motion } from 'framer-motion';
import {
    FaMobileAlt, FaCode, FaTools, FaBrain, FaServer,
    FaCloud, FaWrench, FaPalette, FaLayerGroup
} from 'react-icons/fa';
import { skills } from '../data/portfolio';
import Section from './ui/Section';
import Card from './ui/Card';

export default function Skills() {
    // Map categories to icons
    const categoryIcons: Record<string, any> = {
        'Mobile Development': FaMobileAlt,
        'Frontend & Web': FaCode,
        'Architecture': FaLayerGroup,
        'AI / ML': FaBrain,
        'Backend': FaServer,
        'Frameworks': FaTools,
        'DevOps': FaCloud,
        'Tools & IDEs': FaWrench,
        'Design & Collaboration': FaPalette,
    };

    // Group skills by category
    const categories = Array.from(new Set(skills.map(skill => skill.category)));
    const groupedSkills = categories.map(category => ({
        category,
        icon: categoryIcons[category] || FaCode,
        skills: skills.filter(skill => skill.category === category)
    }));

    return (
        <Section id="skills" title="Skills & Expertise" subtitle="Technologies & Tools I Work With">
            <div className="space-y-12">
                {groupedSkills.map((group, groupIndex) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                    >
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-primary-500/20 rounded-lg">
                                <group.icon className="text-primary-400" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold gradient-text">{group.category}</h3>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {group.skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: skillIndex * 0.03 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Card className="text-center h-full hover:border-primary-500/50 transition-all duration-300">
                                        <p className="text-sm font-medium dark:text-gray-200 light:text-gray-800">
                                            {skill.name}
                                        </p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
