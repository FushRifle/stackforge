export default function HowItWorks() {
    const STEPS = [
        {
            number: '1',
            title: 'Choose Your Stack',
            description: 'Select your preferred framework, styling solution, and additional tools.'
        },
        {
            number: '2',
            title: 'Generate Project',
            description: 'Click the button and let our system assemble your perfect boilerplate.'
        },
        {
            number: '3',
            title: 'Start Building',
            description: 'Download the zip and start coding your app immediately.'
        }
    ];

    return (
        <section id="how-it-works" className="bg-indigo-500 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {STEPS.map((step) => (
                        <div key={step.number} className="text-center">
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                                {step.number}
                            </div>
                            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                            <p className="text-gray-200">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}