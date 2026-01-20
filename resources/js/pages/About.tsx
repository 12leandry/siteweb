import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import NavbarMulti from '@/components/landing/NavbarMulti';
import FooterMulti from '@/components/landing/FooterMulti';

export default function About() {
    const { t, language } = useLanguage();
    const { theme } = useTheme();

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <NavbarMulti />

            <div className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
                {/* Header */}
                <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
                            theme === 'dark'
                                ? 'text-white'
                                : 'text-gray-900'
                        }`}>
                            {t('about.title')}
                        </h1>
                        <p
                            className={`text-xl ${
                                theme === 'dark'
                                    ? 'text-gray-300'
                                    : 'text-gray-600'
                            }`}
                        >
                            {t('about.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* Left - Text */}
                            <div>
                                <h2
                                    className={`text-3xl font-bold mb-6 ${
                                        theme === 'dark'
                                            ? 'text-white'
                                            : 'text-gray-900'
                                    }`}
                                >
                                    {language === 'fr'
                                        ? 'Notre Histoire'
                                        : 'Our Story'}
                                </h2>
                                <p
                                    className={`mb-4 leading-relaxed ${
                                        theme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-700'
                                    }`}
                                >
                                    {language === 'fr'
                                        ? 'Depuis 2014, Digital Solutions aide les entreprises à transformer leur présence digitale. Fondée par une équipe passionnée d\'experts en technologie et marketing, nous avons accompagné plus de 610 clients vers le succès.'
                                        : 'Since 2014, Digital Solutions has been helping businesses transform their digital presence. Founded by a team of passionate technology and marketing experts, we have guided over 610 clients to success.'}
                                </p>
                                <p
                                    className={`mb-4 leading-relaxed ${
                                        theme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-700'
                                    }`}
                                >
                                    {language === 'fr'
                                        ? 'Notre approche unique combine innovation technologique, stratégie marketing et support client exceptionnel. Nous ne créons pas simplement des solutions digitales, nous créons des partenariats durables.'
                                        : 'Our unique approach combines technological innovation, marketing strategy, and exceptional customer support. We don\'t just create digital solutions, we build lasting partnerships.'}
                                </p>
                            </div>

                            {/* Right - Stats */}
                            <div className="space-y-6">
                                <div
                                    className={`p-6 rounded-lg ${
                                        theme === 'dark'
                                            ? 'bg-gray-800'
                                            : 'bg-gray-50'
                                    }`}
                                >
                                    <div className="text-4xl font-bold text-[#FF4D4D] mb-2">
                                        10+
                                    </div>
                                    <div
                                        className={theme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-600'}
                                    >
                                        {language === 'fr'
                                            ? 'Années d\'expérience'
                                            : 'Years of Experience'}
                                    </div>
                                </div>
                                <div
                                    className={`p-6 rounded-lg ${
                                        theme === 'dark'
                                            ? 'bg-gray-800'
                                            : 'bg-gray-50'
                                    }`}
                                >
                                    <div className="text-4xl font-bold text-[#0063b9] mb-2">
                                        610+
                                    </div>
                                    <div
                                        className={theme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-600'}
                                    >
                                        {language === 'fr'
                                            ? 'Projets complétés'
                                            : 'Completed Projects'}
                                    </div>
                                </div>
                                <div
                                    className={`p-6 rounded-lg ${
                                        theme === 'dark'
                                            ? 'bg-gray-800'
                                            : 'bg-gray-50'
                                    }`}
                                >
                                    <div className="text-4xl font-bold text-[#FF4D4D] mb-2">
                                        97%
                                    </div>
                                    <div
                                        className={theme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-600'}
                                    >
                                        {language === 'fr'
                                            ? 'Satisfaction clients'
                                            : 'Client Satisfaction'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterMulti />
        </div>
    );
}
