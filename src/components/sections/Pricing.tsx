import type { PricingPlan } from '@/types/landing';
import Button from '../ui/Button';

const PLANS: PricingPlan[] = [
    {
        name: 'Free',
        price: '$0',
        features: [
            'Basic project generation',
            'Standard templates',
            'Community support'
        ],
        cta: 'Get Started',
        featured: false
    },
    {
        name: 'Pro',
        price: '$9',
        features: [
            'Everything in Free',
            'Save custom templates',
            'GitHub integration',
            'Priority support'
        ],
        cta: 'Start Free Trial',
        featured: true
    },
    {
        name: 'Team',
        price: '$29',
        features: [
            'Everything in Pro',
            'Shared template library',
            'Team management',
            'Private repositories'
        ],
        cta: 'Contact Sales',
        featured: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {PLANS.map((plan) => (
                    <div
                        key={plan.name}
                        className={`border rounded-xl p-6 ${plan.featured
                            ? 'border-2 border-blue-600 relative'
                            : 'border-gray-200'
                            }`}
                    >
                        {plan.featured && (
                            <div className="absolute top-0 right-6 bg-blue-600 text-white px-3 py-1 text-sm rounded-b-lg">
                                Popular
                            </div>
                        )}
                        <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
                        <p className="text-3xl font-bold mb-4">
                            {plan.price}<span className="text-lg text-gray-500">/month</span>
                        </p>
                        <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="text-green-500 mr-2">✓</span> {feature}
                                </li>
                            ))}
                        </ul>
                        <Button
                            variant={plan.featured ? 'primary' : 'secondary'}
                            fullWidth
                        >
                            {plan.cta}
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
}