import {
    Award,
    Bolt,
    HeadphonesIcon,
    Shield,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function WhyChooseUs() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('why-choose-us');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: Award,
            title: 'Expertise',
            description:
                '10+ years of proven experience in digital transformation',
        },
        {
            icon: Bolt,
            title: 'Performance',
            description: 'Fast, reliable solutions that deliver measurable results',
        },
        {
            icon: HeadphonesIcon,
            title: '24/7 Support',
            description: 'Dedicated support team available round the clock',
        },
        {
            icon: Shield,
            title: 'Transparency',
            description:
                'Clear communication and transparent pricing, no hidden costs',
        },
    ];

    return (
        <section
            id="why-choose-us"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side */}
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-10'
                        }`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Pourquoi choisir{' '}
                            <span className="text-[#006080]">nous</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Nous combinons l'expertise technique avec une
                            compréhension approfondie des besoins commerciaux
                            pour livrer des solutions exceptionnelles.
                        </p>

                        {/* Stats */}
                        <div className="space-y-4">
                            <div>
                                <p className="text-4xl font-bold text-[#FF4D4D] mb-1">
                                    97%
                                </p>
                                <p className="text-gray-600">
                                    Client Satisfaction Rate
                                </p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-[#006080] mb-1">
                                    610+
                                </p>
                                <p className="text-gray-600">
                                    Successfully Completed Projects
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Feature Cards */}
                    <div
                        className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 ${
                            isVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-10'
                        }`}
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <div className="bg-[#006080] text-white p-3 rounded-lg w-fit mb-4">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
