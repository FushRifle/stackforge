import Link from 'next/link';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import { FireIcon } from '@heroicons/react/20/solid';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-2"
                    >
                        <FireIcon className="h-10 w-10 text-red-700" />
                        <span className="text-4xl font-bold bg-gradient-to-r from-green-500 to-yellow-700 bg-clip-text text-transparent">
                            StackForge
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="#features"
                            className="text-gray-400 hover:text-primary-600 transition-colors font-medium"
                        >
                            Features
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-gray-400 hover:text-primary-600 transition-colors font-medium"
                        >
                            How It Works
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-gray-400 hover:text-primary-600 transition-colors font-medium"
                        >
                            Pricing
                        </Link>
                        <Button variant="outline" size="sm">
                            Sign In
                        </Button>
                        <Button variant="secondary" size="sm">
                            Get Started
                        </Button>
                    </nav>

                    {/* Mobile menu button would go here */}
                </div>
            </div>
        </header>
    );
}
