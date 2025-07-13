import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { RocketLaunchIcon, PlayIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
            {/* Background image & gradients */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0">
                    <Image
                        src="/bg/raw.jpg"
                        alt="Hero background"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            </div>


            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Animated headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                    >
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                            Build.
                        </span>{' '}
                        <span className="bg-gradient-to-r from-red-500 to-green-200 bg-clip-text text-transparent">
                            Ship.
                        </span>{' '}
                        <span className="bg-gradient-to-r from-green-500 to-yellow-700 bg-clip-text text-transparent">
                            Repeat.
                        </span>
                    </motion.h1>

                    {/* Animated subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
                    >
                        Stop wasting hours configuring your stack. Get production-ready Next.js boilerplates in seconds.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            icon={<RocketLaunchIcon className="h-5 w-5" />}
                            iconPosition="left"
                        >
                            Generate Your Project
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            icon={<PlayIcon className="h-5 w-5" />}
                            iconPosition="left"
                        >
                            Watch Demo
                        </Button>
                    </motion.div>

                    {/* Code snippet with animated background */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="relative bg-gray-800 rounded-xl p-4 shadow-xl max-w-3xl mx-auto overflow-hidden"
                    >
                        {/* Animated background elements */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full pattern-dots pattern-gray-700 pattern-size-2 pattern-opacity-20" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex space-x-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <pre className="text-gray-100 font-mono text-sm md:text-base overflow-x-auto">
                                <code>
                                    <span className="text-purple-400">npx</span> create-next-app@latest<br />
                                    <span className="text-gray-500">  --template</span>=nextboiler/<span className="text-green-400">nextjs-tailwind</span><br />
                                    <span className="text-gray-500">  --features</span>=eslint,prettier,jest<br />
                                    <span className="text-gray-500">  --state</span>=zustand
                                </code>
                            </pre>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="hidden lg:block absolute top-1/4 left-10 w-16 h-16 rounded-full bg-primary-500/10 blur-xl"
            />
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="hidden lg:block absolute bottom-1/4 right-10 w-20 h-20 rounded-full bg-secondary-500/10 blur-xl"
            />
        </section>
    );
}