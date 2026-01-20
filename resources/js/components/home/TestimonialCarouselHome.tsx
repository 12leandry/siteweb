import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TestimonialCarouselHome() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const [scrollPosition, setScrollPosition] = useState(0);

    const testimonials = [
        {
            name: language === 'fr' ? 'Marie Dupont' : 'Marie Dupont',
            company: language === 'fr' ? 'Directrice Marketing' : 'Marketing Director',
            text:
                language === 'fr'
                    ? 'L\'équipe a transformé notre présence en ligne. Les résultats ont dépassé nos attentes avec une augmentation de 300% du trafic.'
                    : 'The team transformed our online presence. The results exceeded our expectations with a 300% traffic increase.',
            rating: 5,
            avatar: '👩‍💼',
        },
        {
            name: language === 'fr' ? 'Pierre Martin' : 'Pierre Martin',
            company: language === 'fr' ? 'PDG Startup Tech' : 'Tech Startup CEO',
            text:
                language === 'fr'
                    ? 'Professionnels, réactifs et innovants. Ils ont développé notre application en temps record avec une qualité exceptionnelle.'
                    : 'Professional, responsive and innovative. They developed our app in record time with exceptional quality.',
            rating: 5,
            avatar: '👨‍💼',
        },
        {
            name: language === 'fr' ? 'Sophie Bernard' : 'Sophie Bernard',
            company: language === 'fr' ? 'Responsable E-commerce' : 'E-commerce Manager',
            text:
                language === 'fr'
                    ? 'Notre boutique en ligne a connu une transformation remarquable. Le support 24/7 est vraiment un plus.'
                    : 'Our online store underwent a remarkable transformation. The 24/7 support is truly an asset.',
            rating: 5,
            avatar: '👩‍🔬',
        },
        {
            name: language === 'fr' ? 'Jean Leclerc' : 'Jean Leclerc',
            company: language === 'fr' ? 'Fondateur Agence' : 'Agency Founder',
            text:
                language === 'fr'
                    ? 'Un partenaire fiable qui comprend vraiment les enjeux du business digital. Je recommande vivement.'
                    : 'A reliable partner who truly understands digital business challenges. I highly recommend them.',
            rating: 5,
            avatar: '👨‍🎨',
        },
    ];

    const rightSideTestimonials = testimonials.slice(0, 3);

    return (
        <section
            className={`py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2
                        className={`text-4xl md:text-5xl font-bold mb-4 ${
                            theme === 'dark'
                                ? 'text-white'
                                : 'text-gray-900'
                        }`}
                    >
                        {language === 'fr'
                            ? 'Témoignages Clients'
                            : 'Client Testimonials'}
                    </h2>
                </div>

                {/* Carousel Section 1 - Scrolling Right */}
                <div className="mb-12 overflow-hidden">
                    <div className="animate-scroll-right flex gap-6">
                        {[...testimonials, ...testimonials, ...testimonials].map(
                            (testimonial, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-96 p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
                                        theme === 'dark'
                                            ? 'bg-gray-700 hover:bg-gray-600'
                                            : 'bg-gray-50 hover:bg-gray-100'
                                    }`}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(
                                                testimonial.rating
                                            )].map(
                                                (_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        className="fill-yellow-400 text-yellow-400"
                                                    />
                                                )
                                            )}
                                        </div>
                                        <p
                                            className={`text-sm leading-relaxed mb-4 flex-1 ${
                                                theme === 'dark'
                                                    ? 'text-gray-200'
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            "{testimonial.text}"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="text-3xl">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <p
                                                    className={`text-sm font-semibold ${
                                                        theme === 'dark'
                                                            ? 'text-white'
                                                            : 'text-gray-900'
                                                    }`}
                                                >
                                                    {testimonial.name}
                                                </p>
                                                <p
                                                    className={`text-xs ${
                                                        theme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-500'
                                                    }`}
                                                >
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Carousel Section 2 - Scrolling Left */}
                <div className="overflow-hidden">
                    <div className="animate-scroll-left flex gap-6">
                        {[...testimonials, ...testimonials, ...testimonials].map(
                            (testimonial, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-96 p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
                                        theme === 'dark'
                                            ? 'bg-gray-700 hover:bg-gray-600'
                                            : 'bg-gray-50 hover:bg-gray-100'
                                    }`}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(
                                                testimonial.rating
                                            )].map(
                                                (_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        className="fill-yellow-400 text-yellow-400"
                                                    />
                                                )
                                            )}
                                        </div>
                                        <p
                                            className={`text-sm leading-relaxed mb-4 flex-1 ${
                                                theme === 'dark'
                                                    ? 'text-gray-200'
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            "{testimonial.text}"
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div className="text-3xl">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <p
                                                    className={`text-sm font-semibold ${
                                                        theme === 'dark'
                                                            ? 'text-white'
                                                            : 'text-gray-900'
                                                    }`}
                                                >
                                                    {testimonial.name}
                                                </p>
                                                <p
                                                    className={`text-xs ${
                                                        theme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-500'
                                                    }`}
                                                >
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scroll-right {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 3));
                    }
                }
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(100% / 3));
                    }
                }
                .animate-scroll-right {
                    animation: scroll-right 40s linear infinite;
                }
                .animate-scroll-left {
                    animation: scroll-left 40s linear infinite;
                }
            `}</style>
        </section>
    );
}
