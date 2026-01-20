import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import { ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function CTASectionHome() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    return (
        <section
            className={`relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
        >
            {/* Background Gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0063b9] to-[#26d04c] opacity-90"></div>
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2000"></div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {language === 'fr'
                        ? 'Transformez Votre Vision Digitale'
                        : 'Transform Your Digital Vision'}
                </h2>
                <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
                    {language === 'fr'
                        ? 'Prêt à propulser votre entreprise vers le succès numérique ? Notre équipe est prête à créer des solutions exceptionnelles pour vous.'
                        : 'Ready to propel your business towards digital success? Our team is ready to create exceptional solutions for you.'}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                        <a className="px-8 py-4 bg-white text-[#0063b9] font-semibold rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105 inline-flex items-center gap-2">
                            {language === 'fr'
                                ? 'Commencer Maintenant'
                                : 'Get Started Now'}
                            <ArrowRight size={20} />
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors transform hover:scale-105">
                            {language === 'fr'
                                ? 'Discuter de Votre Projet'
                                : 'Discuss Your Project'}
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
}
