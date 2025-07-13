import type { FeatureItem } from '@/types/landing';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FEATURES: FeatureItem[] = [
    {
        icon: '⚡',
        color: 'text-blue-400',
        title: 'Lightning Fast Setup',
        description: 'Go from zero to production-ready in seconds, not hours. No more repetitive setup tasks.'
    },
    {
        icon: '🧩',
        color: 'text-purple-400',
        title: 'Customizable Stack',
        description: 'Pick only what you need. Tailwind? Zustand? Testing? Your choice.'
    },
    {
        icon: '🔒',
        color: 'text-green-400',
        title: 'Best Practices Built-in',
        description: 'Pre-configured with industry standards so you can focus on building features.'
    }
];

const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5
        }
    })
};

export default function Features() {
    return (
        <section id="features" className="relative overflow-hidden py-24">
            {/* Background Image with overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/bg/raw2.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90" />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                    Why developers love StackForge
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            variants={featureVariants}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-xl border border-white/20">
                                <div className={`${feature.color} text-4xl mb-6`}>{feature.icon}</div>
                                <h3 className="font-bold text-xl mb-3 text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Stats counter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                >
                    <div className="p-6">
                        <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                        <div className="text-gray-600">Projects Generated</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                        <div className="text-gray-600">Framework Options</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                        <div className="text-gray-600">Developer Satisfaction</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                        <div className="text-gray-600">Support Available</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}