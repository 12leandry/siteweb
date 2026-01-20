import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import NavbarMulti from '@/components/landing/NavbarMulti';
import FooterMulti from '@/components/landing/FooterMulti';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from '@inertiajs/react';

interface ServiceDetails {
    id: string;
    titleFr: string;
    titleEn: string;
    descriptionFr: string;
    descriptionEn: string;
    long_descriptionFr: string;
    long_descriptionEn: string;
    benefitsFr: string[];
    benefitsEn: string[];
    icon: string;
    color: string;
}

export default function ServiceDetail({ serviceId }: { serviceId: string }) {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const services: Record<string, ServiceDetails> = {
        'web-development': {
            id: 'web-development',
            titleFr: 'Développement Web',
            titleEn: 'Web Development',
            descriptionFr: 'Sites web modernes et performants avec les dernières technologies',
            descriptionEn: 'Modern and high-performance websites with latest technologies',
            long_descriptionFr:
                'Nous créons des sites web exceptionnels qui non seulement attirent vos clients, mais les convertissent en ventes réelles. Chaque site est optimisé pour les moteurs de recherche, rapide, sécurisé et facile à gérer.',
            long_descriptionEn:
                'We create exceptional websites that not only attract your clients but convert them into real sales. Each site is optimized for search engines, fast, secure, and easy to manage.',
            benefitsFr: [
                'Design moderne et responsive',
                'Optimisation SEO intégrée',
                'Performance et vitesse maximales',
                'Sécurité garantie',
                'Support 24/7',
                'Statistiques en temps réel',
            ],
            benefitsEn: [
                'Modern and responsive design',
                'Integrated SEO optimization',
                'Maximum performance and speed',
                'Guaranteed security',
                '24/7 support',
                'Real-time statistics',
            ],
            icon: '🌐',
            color: 'from-blue-500 to-blue-600',
        },
        ecommerce: {
            id: 'ecommerce',
            titleFr: 'E-commerce',
            titleEn: 'E-Commerce',
            descriptionFr: 'Solutions de vente en ligne optimisées pour les conversions',
            descriptionEn: 'Online sales solutions optimized for conversions',
            long_descriptionFr:
                'Nous développons des boutiques en ligne complètes avec tous les outils nécessaires pour vendre efficacement. Gestion des produits, paiements sécurisés, stocks automatisés et plus encore.',
            long_descriptionEn:
                'We develop complete online stores with all the tools needed to sell effectively. Product management, secure payments, automated inventory and more.',
            benefitsFr: [
                'Panier d\'achat optimisé',
                'Multiples moyens de paiement',
                'Gestion des stocks automatique',
                'Système de coupon et promotions',
                'Livraison intégrée',
                'Rapports de vente détaillés',
            ],
            benefitsEn: [
                'Optimized shopping cart',
                'Multiple payment methods',
                'Automatic inventory management',
                'Coupon and promotion system',
                'Integrated shipping',
                'Detailed sales reports',
            ],
            icon: '🛒',
            color: 'from-purple-500 to-purple-600',
        },
        'digital-marketing': {
            id: 'digital-marketing',
            titleFr: 'Marketing Numérique',
            titleEn: 'Digital Marketing',
            descriptionFr: 'Stratégies marketing complètes pour visibilité maximale',
            descriptionEn: 'Complete marketing strategies for maximum visibility',
            long_descriptionFr:
                'Nos stratégies marketing numériques sont conçues pour augmenter votre visibilité en ligne et générer des leads qualifiés. Réseaux sociaux, email marketing, publicités ciblées et bien plus.',
            long_descriptionEn:
                'Our digital marketing strategies are designed to increase your online visibility and generate qualified leads. Social media, email marketing, targeted ads and more.',
            benefitsFr: [
                'Gestion des réseaux sociaux',
                'Campagnes email automatisées',
                'Publicités Google et Facebook',
                'Création de contenu',
                'Analyse et rapports',
                'ROI mesurable',
            ],
            benefitsEn: [
                'Social media management',
                'Automated email campaigns',
                'Google and Facebook ads',
                'Content creation',
                'Analytics and reports',
                'Measurable ROI',
            ],
            icon: '📱',
            color: 'from-pink-500 to-pink-600',
        },
        seo: {
            id: 'seo',
            titleFr: 'Optimisation SEO',
            titleEn: 'SEO Optimization',
            descriptionFr: 'Optimisation pour dominer les classements Google',
            descriptionEn: 'Search engine optimization to dominate Google rankings',
            long_descriptionFr:
                'Notre expertise SEO vous aide à atteindre les premières positions sur Google. Nous optimisons chaque aspect de votre site pour les moteurs de recherche.',
            long_descriptionEn:
                'Our SEO expertise helps you reach the top positions on Google. We optimize every aspect of your site for search engines.',
            benefitsFr: [
                'Audit SEO complet',
                'Optimisation on-page',
                'Création de backlinks',
                'Recherche de mots-clés',
                'Suivi des positions',
                'Rapports mensuels',
            ],
            benefitsEn: [
                'Complete SEO audit',
                'On-page optimization',
                'Backlink creation',
                'Keyword research',
                'Position tracking',
                'Monthly reports',
            ],
            icon: '🔍',
            color: 'from-green-500 to-green-600',
        },
        design: {
            id: 'design',
            titleFr: 'Design UI/UX',
            titleEn: 'UI/UX Design',
            descriptionFr: 'Interfaces magnifiques et conviviales',
            descriptionEn: 'Beautiful and user-friendly interfaces',
            long_descriptionFr:
                'Nous créons des interfaces magnifiques qui offrent une excellente expérience utilisateur. Chaque élément est pensé pour convertir et satisfaire vos utilisateurs.',
            long_descriptionEn:
                'We create beautiful interfaces that provide an excellent user experience. Every element is designed to convert and satisfy your users.',
            benefitsFr: [
                'Design moderne et attrayant',
                'Expérience utilisateur optimale',
                'Prototypes interactifs',
                'Tests utilisateurs',
                'Accessibilité garantie',
                'Évolutif et maintenable',
            ],
            benefitsEn: [
                'Modern and attractive design',
                'Optimal user experience',
                'Interactive prototypes',
                'User testing',
                'Guaranteed accessibility',
                'Scalable and maintainable',
            ],
            icon: '✨',
            color: 'from-orange-500 to-orange-600',
        },
        'mobile-apps': {
            id: 'mobile-apps',
            titleFr: 'Applications Mobiles',
            titleEn: 'Mobile Apps',
            descriptionFr: 'Applications natives et multiplateforme',
            descriptionEn: 'Native and cross-platform applications',
            long_descriptionFr:
                'Nous développons des applications mobiles natives et multiplateforme qui fonctionnent parfaitement sur iOS et Android. Rapides, sécurisées et faciles à utiliser.',
            long_descriptionEn:
                'We develop native and cross-platform mobile applications that work perfectly on iOS and Android. Fast, secure and easy to use.',
            benefitsFr: [
                'Applications natives iOS & Android',
                'Applications multiplateforme',
                'Performance optimale',
                'Push notifications',
                'Intégration API',
                'Support post-lancement',
            ],
            benefitsEn: [
                'Native iOS & Android apps',
                'Cross-platform applications',
                'Optimal performance',
                'Push notifications',
                'API integration',
                'Post-launch support',
            ],
            icon: '📲',
            color: 'from-red-500 to-red-600',
        },
    };

    const service = services[serviceId] || services['web-development'];
    const title = language === 'fr' ? service.titleFr : service.titleEn;
    const description =
        language === 'fr'
            ? service.long_descriptionFr
            : service.long_descriptionEn;
    const benefits = language === 'fr' ? service.benefitsFr : service.benefitsEn;

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <NavbarMulti />

            <div className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
                {/* Header */}
                <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0063b9] to-[#26d04c]">
                    <div className="max-w-7xl mx-auto text-center text-white">
                        <div className="text-6xl mb-6">{service.icon}</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {title}
                        </h1>
                        <p className="text-xl max-w-2xl mx-auto text-gray-100">
                            {language === 'fr'
                                ? service.descriptionFr
                                : service.descriptionEn}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-7xl mx-auto">
                        {/* Description */}
                        <div className="mb-20">
                            <p
                                className={`text-xl leading-relaxed ${
                                    theme === 'dark'
                                        ? 'text-gray-300'
                                        : 'text-gray-700'
                                }`}
                            >
                                {description}
                            </p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="mb-20">
                            <h2
                                className={`text-3xl font-bold mb-12 ${
                                    theme === 'dark'
                                        ? 'text-white'
                                        : 'text-gray-900'
                                }`}
                            >
                                {language === 'fr'
                                    ? 'Avantages et Bénéfices'
                                    : 'Advantages and Benefits'}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4"
                                    >
                                        <CheckCircle className="text-[#26d04c] flex-shrink-0 mt-1" />
                                        <p
                                            className={`text-lg ${
                                                theme === 'dark'
                                                    ? 'text-gray-300'
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div
                            className={`rounded-lg p-12 text-center bg-gradient-to-r from-[#0063b9] to-[#26d04c]`}
                        >
                            <h3 className="text-3xl font-bold text-white mb-4">
                                {language === 'fr'
                                    ? 'Prêt à commencer ?'
                                    : 'Ready to get started?'}
                            </h3>
                            <p className="text-white/90 mb-8 text-lg">
                                {language === 'fr'
                                    ? 'Contactez-nous dès aujourd\'hui pour discuter de votre projet.'
                                    : 'Contact us today to discuss your project.'}
                            </p>
                            <Link href="/contact">
                                <a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0063b9] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                                    {language === 'fr'
                                        ? 'Demander un devis'
                                        : 'Request a Quote'}
                                    <ArrowRight size={20} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <FooterMulti />
        </div>
    );
}