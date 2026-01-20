import { useEffect, useState } from 'react';

export default function CTASection() {
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

        const element = document.getElementById('cta-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="cta-section"
            className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#006080] via-[#FF4D4D] to-[#006080]"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2000"></div>
            </div>

            {/* Content */}
            <div
                className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Prêt à démarrer votre transformation digitale?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                    Rejoignez plus de 610 entreprises qui ont déjà multiplié
                    leurs ventes avec nos solutions
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-white text-[#006080] font-semibold rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
                        Commencer Maintenant
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all transform hover:scale-105">
                        Demander une Démo
                    </button>
                </div>
            </div>
        </section>
    );
}
