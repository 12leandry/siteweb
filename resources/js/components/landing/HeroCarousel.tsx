import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

interface HeroSlide {
    image: string;
    title: string;
    subtitle: string;
}

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const slides: HeroSlide[] = [
        {
            image: '/mpe-bg.png',
            title: 'Multipliez vos ventes',
            subtitle: 'Des solutions digitales qui transforment vos visiteurs en clients',
        },
        {
            image: '/mpe-bg.png',
            title: 'Faites accroître votre notoriété',
            subtitle: 'Une présence en ligne forte qui positionne votre marque',
        },
        {
            image: '/mpe-bg.png',
            title: 'Augmentez votre visibilité',
            subtitle: 'Soyez trouvé sur Google et dominez votre marché',
        },
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Auto-rotate carousel every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden pt-16">
            {/* Carousel Container */}
            <div className="relative w-full h-screen">
                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `linear-gradient(135deg, rgba(0, 99, 185, 0.4) 0%, rgba(38, 208, 76, 0.4) 100%), url('${slide.image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/20"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-center">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                                <div
                                    className={`text-center transition-all duration-1000 ${
                                        index === currentSlide
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-10'
                                    }`}
                                    style={{
                                        transitionDelay:
                                            index === currentSlide
                                                ? '200ms'
                                                : '0ms',
                                    }}
                                >
                                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
                                        {slide.subtitle}
                                    </p>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button className="px-8 py-4 bg-[#26d04c] text-white font-semibold rounded-lg hover:bg-[#22ba41] transition-colors transform hover:scale-105">
                                            Commencer
                                        </button>
                                        <Link href="/demander-un-devis">
                                            <a className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0063b9] transition-all transform hover:scale-105">
                                                Demander un devis
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Carousel Controls - Dots */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 ${
                                index === currentSlide
                                    ? 'w-10 h-3 bg-[#26d04c]'
                                    : 'w-3 h-3 bg-white/50 hover:bg-white'
                            } rounded-full`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                    <ChevronDown size={32} className="text-white animate-bounce" />
                </div>
            </div>
        </section>
    );
}
