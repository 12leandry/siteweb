import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

interface ServiceCard {
    id: string;
    title: string;
    titleFr: string;
    category: string;
    categoryFr: string;
    description: string;
    descriptionFr: string;
    icon: string;
    color: string;
    link: string;
}

export default function ServicesGridHome() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const [visibleCards, setVisibleCards] = useState<string[]>([]);

    const services: ServiceCard[] = [
        {
            id: 'web-dev',
            title: 'Web Development',
            titleFr: 'Développement Web',
            category: 'Development',
            categoryFr: 'Développement',
            description:
                'Modern and high-performance websites with latest technologies',
            descriptionFr:
                'Sites web modernes et performants avec les dernières technologies',
            icon: '🌐',
            color: 'from-blue-500 to-blue-600',
            link: '/service/web-development',
        },
        {
            id: 'ecommerce',
            title: 'E-Commerce',
            titleFr: 'E-commerce',
            category: 'Commerce',
            categoryFr: 'Commerce',
            description:
                'Complete online sales solutions optimized for conversions',
            descriptionFr:
                'Solutions de vente en ligne complètes optimisées pour les conversions',
            icon: '🛒',
            color: 'from-purple-500 to-purple-600',
            link: '/service/ecommerce',
        },
        {
            id: 'marketing',
            title: 'Digital Marketing',
            titleFr: 'Marketing Numérique',
            category: 'Marketing',
            categoryFr: 'Marketing',
            description:
                'Complete digital marketing strategies for maximum visibility',
            descriptionFr:
                'Stratégies marketing numérique complètes pour une visibilité maximale',
            icon: '📱',
            color: 'from-pink-500 to-pink-600',
            link: '/service/digital-marketing',
        },
        {
            id: 'seo',
            title: 'SEO Optimization',
            titleFr: 'Optimisation SEO',
            category: 'SEO',
            categoryFr: 'SEO',
            description: 'Search engine optimization to dominate Google rankings',
            descriptionFr:
                'Optimisation pour dominer les classements Google et Bing',
            icon: '🔍',
            color: 'from-green-500 to-green-600',
            link: '/service/seo',
        },
        {
            id: 'design',
            title: 'UI/UX Design',
            titleFr: 'Design UI/UX',
            category: 'Design',
            categoryFr: 'Design',
            description:
                'Beautiful and user-friendly interfaces for optimal experience',
            descriptionFr:
                'Interfaces magnifiques et conviviales pour une expérience optimale',
            icon: '✨',
            color: 'from-orange-500 to-orange-600',
            link: '/service/design',
        },
        {
            id: 'mobile',
            title: 'Mobile Apps',
            titleFr: 'Applications Mobiles',
            category: 'Mobile',
            categoryFr: 'Mobile',
            description: 'Native and cross-platform apps for iOS and Android',
            descriptionFr:
                'Applications natives et multiplateforme pour iOS et Android',
            icon: '📲',
            color: 'from-red-500 to-red-600',
            link: '/service/mobile-apps',
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute(
                            'data-service-id'
                        );
                        if (id) {
                            setVisibleCards((prev) => [
                                ...new Set([...prev, id]),
                            ]);
                        }
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

    return (
        <><section
            className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2
                        className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark'
                                ? 'text-white'
                                : 'text-gray-900'}`}
                    >
                        {language === 'fr' ? 'Nos Services' : 'Our Services'}
                    </h2>
                    <p
                        className={`text-lg max-w-2xl mx-auto ${theme === 'dark'
                                ? 'text-gray-300'
                                : 'text-gray-600'}`}
                    >
                        {language === 'fr'
                            ? 'Une gamme complète de solutions digitales pour transformer votre business'
                            : 'A complete range of digital solutions to transform your business'}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link key={service.id} href={service.link}>
                            <article
                                data-service-card
                                data-service-id={service.id}
                                className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full cursor-pointer shimmer-border ${visibleCards.includes(service.id)
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-10'} hover:-translate-y-2 ${theme === 'dark'
                                        ? 'bg-gray-800/50'
                                        : 'bg-white/50'}`}
                                style={{
                                    transitionDelay: `${services.indexOf(service) * 100}ms`,
                                }}
                            >
                                {/* Image Section */}
                                <div className="relative h-52 overflow-hidden">
                                    <div
                                        className={`w-full h-full bg-gradient-to-br ${service.color} flex items-center justify-center relative transition-transform duration-700 group-hover:scale-110`}
                                    >
                                        <span
                                            className="text-7xl transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12"
                                        >
                                            {service.icon}
                                        </span>
                                    </div>
                                    {/* Gradient Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    {/* Category Badge */}
                                    <span
                                        className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${theme === 'dark'
                                                ? 'bg-gray-900/80 text-white'
                                                : 'bg-white/90 text-gray-900'}`}
                                    >
                                        {language === 'fr'
                                            ? service.categoryFr
                                            : service.category}
                                    </span>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <h3
                                        className={`text-xl font-bold mb-3 transition-colors duration-300 ${theme === 'dark'
                                                ? 'text-white group-hover:text-[#26d04c]'
                                                : 'text-gray-900 group-hover:text-[#26d04c]'}`}
                                    >
                                        {language === 'fr'
                                            ? service.titleFr
                                            : service.title}
                                    </h3>
                                    <p
                                        className={`line-clamp-2 mb-4 transition-colors duration-300 ${theme === 'dark'
                                                ? 'text-gray-300 group-hover:text-gray-200'
                                                : 'text-gray-600 group-hover:text-gray-700'}`}
                                    >
                                        {language === 'fr'
                                            ? service.descriptionFr
                                            : service.description}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-[#26d04c] font-medium group-hover:gap-3 transition-all duration-300">
                                        {language === 'fr'
                                            ? 'En savoir plus'
                                            : 'Learn more'}
                                        <ArrowRight size={16} />
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section><style>{`
            .shimmer-border {
                position: relative;
                border: 2px solid transparent;
                background-clip: padding-box;
            }

            .shimmer-border::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: inherit;
                padding: 2px;
                background: linear-gradient(
                    90deg,
                    transparent,
                    rgba(38, 208, 76, 0.5),
                    transparent
                );
                background-size: 200% 100%;
                -webkit-mask: 
                    linear-gradient(#fff 0 0) content-box, 
                    linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
                pointer-events: none;
                border-radius: 16px;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .shimmer-border:hover::before {
                opacity: 1;
                animation: shimmer 1.5s infinite;
            }

            @keyframes shimmer {
                0% {
                    background-position: 200% 0;
                }
                100% {
                    background-position: -200% 0;
                }
            }
        `}</style></>
    );
}
