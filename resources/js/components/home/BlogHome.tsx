import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import { Calendar, Tag } from 'lucide-react';

export default function BlogHome() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const articles = [
        {
            title: language === 'fr' ? 'Comment Utiliser ChatGPT pour Créer du Contenu ?' : 'How to Use ChatGPT for Content Creation?',
            description:
                language === 'fr'
                    ? 'Découvrez comment utiliser efficacement ChatGPT pour la création de contenu de qualité.'
                    : 'Discover how to effectively use ChatGPT for quality content creation.',
            category: 'IA',
            date: language === 'fr' ? '15 janvier 2024' : 'January 15, 2024',
            icon: '🤖',
            readMore: language === 'fr' ? 'Lire la suite' : 'Read more',
        },
        {
            title: language === 'fr' ? 'SEO : Tout Ce Que Vous Devez Savoir sur les Noms de Domaine' : 'SEO: Everything You Need to Know About Domain Names',
            description:
                language === 'fr'
                    ? 'Apprenez tout sur les noms de domaine et leur impact crucial sur le SEO de votre site.'
                    : 'Learn everything about domain names and their critical impact on your site\'s SEO.',
            category: language === 'fr' ? 'SEO & Référencement' : 'SEO & Referencing',
            date: language === 'fr' ? '24 mars 2023' : 'March 24, 2023',
            icon: '🔍',
            readMore: language === 'fr' ? 'Lire la suite' : 'Read more',
        },
        {
            title: language === 'fr' ? '7 Conseils pour Réussir en Affaires sur les Réseaux Sociaux' : '7 Tips for Business Success on Social Media',
            description:
                language === 'fr'
                    ? 'Conseils essentiels pour développer votre présence et vos ventes sur les réseaux sociaux.'
                    : 'Essential tips for developing your presence and sales on social media.',
            category: language === 'fr' ? 'Marketing Digital' : 'Digital Marketing',
            date: language === 'fr' ? '13 mars 2023' : 'March 13, 2023',
            icon: '📱',
            readMore: language === 'fr' ? 'Lire la suite' : 'Read more',
        },
    ];

    return (
        <section
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
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
                        {language === 'fr' ? 'Notre Blog' : 'Our Blog'}
                    </h2>
                    <p
                        className={`text-lg max-w-2xl mx-auto ${
                            theme === 'dark'
                                ? 'text-gray-300'
                                : 'text-gray-600'
                        }`}
                    >
                        {language === 'fr'
                            ? 'Conseils, tendances et actualités du monde digital'
                            : 'Tips, trends and news from the digital world'}
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className={`hover-dev-card group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col ${
                                theme === 'dark'
                                    ? 'bg-gray-800'
                                    : 'bg-white'
                            }`}
                        >
                            {/* Image/Icon */}
                            <div className="relative h-48 bg-gradient-to-br from-[#0063b9] to-[#26d04c] flex items-center justify-center overflow-hidden">
                                <span className="text-6xl transition-transform duration-500 group-hover:scale-110">
                                    {article.icon}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                {/* Category & Date */}
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="flex items-center gap-1 text-xs text-[#26d04c] font-medium">
                                        <Tag size={14} />
                                        {article.category}
                                    </div>
                                    <div
                                        className={`flex items-center gap-1 text-xs transition-colors duration-300 ${
                                            theme === 'dark'
                                                ? 'text-gray-400 group-hover:text-gray-300'
                                                : 'text-gray-500 group-hover:text-gray-700'
                                        }`}
                                    >
                                        <Calendar size={14} />
                                        {article.date}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3
                                    className={`text-xl font-bold mb-3 line-clamp-2 transition-colors duration-300 ${
                                        theme === 'dark'
                                            ? 'text-white group-hover:text-[#26d04c]'
                                            : 'text-gray-900 group-hover:text-[#26d04c]'
                                    }`}
                                >
                                    {article.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className={`mb-6 line-clamp-3 flex-1 transition-colors duration-300 ${
                                        theme === 'dark'
                                            ? 'text-gray-300 group-hover:text-gray-200'
                                            : 'text-gray-600 group-hover:text-gray-700'
                                    }`}
                                >
                                    {article.description}
                                </p>

                                {/* Read More Link */}
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-[#26d04c] font-semibold hover:text-[#22ba41] transition-all duration-300 group-hover:gap-3"
                                >
                                    {article.readMore}
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
