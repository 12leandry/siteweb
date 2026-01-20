import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import { Award, Users, Zap, Clock } from 'lucide-react';

export default function StatsHome() {
    const { language } = useLanguage();
    const { theme } = useTheme();

    const stats = [
        {
            icon: Clock,
            value: '10+',
            label: language === 'fr' ? 'Années d\'Expérience' : 'Years of Experience',
        },
        {
            icon: Award,
            value: '97%',
            label: language === 'fr' ? 'Satisfaction Client' : 'Client Satisfaction',
        },
        {
            icon: Users,
            value: '610+',
            label: language === 'fr' ? 'Projets Complétés' : 'Projects Completed',
        },
        {
            icon: Zap,
            value: '24/7',
            label: language === 'fr' ? 'Support Disponible' : 'Available Support',
        },
    ];

    return (
        <section
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className={`text-center p-8 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                                    theme === 'dark'
                                        ? 'bg-gray-800 hover:bg-gray-700'
                                        : 'bg-gray-50 hover:bg-gray-100'
                                }`}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 rounded-full bg-gradient-to-br from-[#0063b9] to-[#26d04c]">
                                        <Icon size={32} className="text-white" />
                                    </div>
                                </div>
                                <div className="text-4xl font-bold text-[#26d04c] mb-2">
                                    {stat.value}
                                </div>
                                <p
                                    className={`text-sm ${
                                        theme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                    }`}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
