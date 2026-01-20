import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import { useState } from 'react';
import {
    Code,
    Lightbulb,
    Users,
    BarChart3,
} from 'lucide-react';

export default function DistinguishesUsHome() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const [selectedPrinciple, setSelectedPrinciple] = useState(0);

    const principles = [
        {
            icon: Code,
            title: language === 'fr' ? 'Expertise Digitale Reconnue' : 'Recognized Digital Expertise',
            description:
                language === 'fr'
                    ? 'Une équipe de spécialistes certifiés avec des années d\'expérience dans tous les domaines du digital.'
                    : 'A team of certified specialists with years of experience in all areas of digital.',
        },
        {
            icon: Lightbulb,
            title: language === 'fr' ? 'Innovation et Technologies de Pointe' : 'Innovation & Cutting-Edge Technologies',
            description:
                language === 'fr'
                    ? 'Nous utilisons les dernières technologies et méthodologies pour créer des solutions modernes et scalables.'
                    : 'We use the latest technologies and methodologies to create modern and scalable solutions.',
        },
        {
            icon: Users,
            title: language === 'fr' ? 'Accompagnement Personnalisé 24/7' : 'Personalized Support 24/7',
            description:
                language === 'fr'
                    ? 'Votre succès est notre priorité. Nous vous accompagnons à chaque étape de votre transformation digitale.'
                    : 'Your success is our priority. We support you at every stage of your digital transformation.',
        },
        {
            icon: BarChart3,
            title: language === 'fr' ? 'Résultats Mesurables et Durables' : 'Measurable & Lasting Results',
            description:
                language === 'fr'
                    ? 'Chaque projet est analysé, mesuré et optimisé pour garantir des résultats tangibles et durables.'
                    : 'Every project is analyzed, measured and optimized to ensure tangible and lasting results.',
        },
    ];

    return (
        <><section
            className={`py-20 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <span
                            className={`px-4 py-2 rounded-full text-sm font-semibold border ${theme === 'dark'
                                    ? 'bg-gray-700 border-gray-600 text-gray-300'
                                    : 'bg-white border-gray-300 text-gray-700'}`}
                        >
                            {language === 'fr' ? 'Ce qui nous distingue' : 'What Sets Us Apart'}
                        </span>
                    </div>
                    <h2
                        className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark'
                                ? 'text-white'
                                : 'text-gray-900'}`}
                    >
                        {language === 'fr'
                            ? 'Nos Principes et Valeurs'
                            : 'Our Principles & Values'}
                    </h2>
                </div>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {principles.map((principle, index) => {
                        const Icon = principle.icon;
                        const isSelected = selectedPrinciple === index;

                        return (
                            <div
                                key={index}
                                onClick={() => setSelectedPrinciple(index)}
                                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 transform shimmer-border ${isSelected
                                        ? 'scale-105 shadow-xl'
                                        : 'hover:shadow-lg hover:scale-105'} ${isSelected
                                        ? theme === 'dark'
                                            ? 'bg-gradient-to-br from-[#0063b9] to-[#26d04c] text-white'
                                            : 'bg-gradient-to-br from-[#0063b9] to-[#26d04c] text-white'
                                        : theme === 'dark'
                                            ? 'bg-gray-700 hover:bg-gray-600'
                                            : 'bg-white hover:bg-gray-50'}`}
                            >
                                <div
                                    className={`mb-4 ${isSelected
                                            ? 'text-white'
                                            : 'text-[#0063b9]'}`}
                                >
                                    <Icon size={40} />
                                </div>
                                <h3
                                    className={`text-lg font-bold mb-3 ${isSelected
                                            ? 'text-white'
                                            : theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'}`}
                                >
                                    {principle.title}
                                </h3>
                                <p
                                    className={`text-sm leading-relaxed ${isSelected
                                            ? 'text-white/90'
                                            : theme === 'dark'
                                                ? 'text-gray-300'
                                                : 'text-gray-600'}`}
                                >
                                    {principle.description}
                                </p>
                            </div>
                        );
                    })}
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
                border-radius: 8px;
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
