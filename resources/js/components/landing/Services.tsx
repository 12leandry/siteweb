import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Services() {
    const [visibleCards, setVisibleCards] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(
                            entry.target.getAttribute('data-index') || '0'
                        );
                        setVisibleCards((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[data-service-card]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            title: 'Web Development',
            category: 'Development',
            description:
                'Sites web modernes et performants, construits avec les dernières technologies',
            color: 'bg-blue-500',
            icon: '🌐',
        },
        {
            title: 'E-commerce',
            category: 'Commerce',
            description:
                'Solutions de vente en ligne optimisées pour convertir et générer des revenus',
            color: 'bg-purple-500',
            icon: '🛒',
        },
        {
            title: 'Digital Marketing',
            category: 'Marketing',
            description:
                'Stratégies marketing digitales complètes pour augmenter votre visibilité',
            color: 'bg-pink-500',
            icon: '📱',
        },
        {
            title: 'SEO Optimization',
            category: 'SEO',
            description:
                'Optimisation pour moteurs de recherche pour dominer Google et Bing',
            color: 'bg-green-500',
            icon: '🔍',
        },
        {
            title: 'UI/UX Design',
            category: 'Design',
            description:
                'Interfaces utilisateur magnifiques et interfaces conviviales',
            color: 'bg-orange-500',
            icon: '✨',
        },
        {
            title: 'Mobile Apps',
            category: 'Mobile',
            description:
                'Applications mobiles natives et cross-platform pour iOS et Android',
            color: 'bg-red-500',
            icon: '📲',
        },
    ];

    return (
        <section
            id="services"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Nos Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Une gamme complète de solutions digitales pour
                        transformer votre business
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-service-card
                            data-index={index}
                            className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                                visibleCards.includes(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                            } hover:scale-105`}
                        >
                            {/* Service Image Placeholder */}
                            <div
                                className={`h-48 ${service.color} flex items-center justify-center`}
                            >
                                <span className="text-6xl">{service.icon}</span>
                            </div>

                            {/* Service Content */}
                            <div className="p-6">
                                <p className="text-sm font-semibold text-[#006080] uppercase tracking-widest mb-2">
                                    {service.category}
                                </p>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {service.description}
                                </p>

                                {/* Learn More Link */}
                                <a
                                    href="#"
                                    className="inline-flex items-center text-[#FF4D4D] font-semibold hover:text-[#E63D3D] transition-colors"
                                >
                                    Learn more
                                    <ArrowRight size={20} className="ml-2" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
