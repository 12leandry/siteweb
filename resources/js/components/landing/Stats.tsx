import {
    Briefcase,
    Clock,
    Smile,
    TrendingUp,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';

export default function Stats() {
    const [counts, setCounts] = useState({
        experience: 0,
        satisfaction: 0,
        projects: 0,
        support: 0,
    });
    const [isVisible, setIsVisible] = useState(false);
    const { language } = useLanguage();
    const { theme } = useTheme();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('stats');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    // Counter animation
    useEffect(() => {
        if (!isVisible) return;

        const targets = {
            experience: 10,
            satisfaction: 97,
            projects: 610,
            support: 24,
        };

        const intervals = {
            experience: setInterval(() => {
                setCounts((prev) => ({
                    ...prev,
                    experience: Math.min(
                        prev.experience + 1,
                        targets.experience
                    ),
                }));
            }, 50),
            satisfaction: setInterval(() => {
                setCounts((prev) => ({
                    ...prev,
                    satisfaction: Math.min(
                        prev.satisfaction + 2,
                        targets.satisfaction
                    ),
                }));
            }, 20),
            projects: setInterval(() => {
                setCounts((prev) => ({
                    ...prev,
                    projects: Math.min(
                        prev.projects + 10,
                        targets.projects
                    ),
                }));
            }, 5),
            support: setInterval(() => {
                setCounts((prev) => ({
                    ...prev,
                    support: Math.min(prev.support + 1, targets.support),
                }));
            }, 50),
        };

        return () => {
            Object.values(intervals).forEach((interval) =>
                clearInterval(interval)
            );
        };
    }, [isVisible]);

    const stats = [
        {
            icon: Clock,
            value: `${counts.experience}+`,
            label: language === 'fr' ? 'Années d\'Expérience' : 'Years of Experience',
        },
        {
            icon: Smile,
            value: `${counts.satisfaction}%`,
            label: language === 'fr' ? 'Satisfaction Client' : 'Client Satisfaction',
        },
        {
            icon: Briefcase,
            value: `${counts.projects}+`,
            label: language === 'fr' ? 'Projets Complétés' : 'Projects Completed',
        },
        {
            icon: TrendingUp,
            value: `${counts.support}/7`,
            label: language === 'fr' ? 'Support Disponible' : 'Available Support',
        },
    ];

    return (
        <section
            id="stats"
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
                theme === 'dark'
                    ? 'bg-gradient-to-r from-gray-900 to-gray-800'
                    : 'bg-gradient-to-r from-[#0063b9] to-[#0052a3]'
            }`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className={`text-center transition-all duration-700 ${
                                    isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-10'
                                } ${
                                    theme === 'dark'
                                        ? 'text-white'
                                        : 'text-white'
                                }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                }}
                            >
                                <div className="flex justify-center mb-4">
                                    <div
                                        className={`p-4 rounded-lg ${
                                            theme === 'dark'
                                                ? 'bg-gray-700'
                                                : 'bg-[#26d04c]/20'
                                        }`}
                                    >
                                        <Icon
                                            size={32}
                                            className="text-[#26d04c]"
                                        />
                                    </div>
                                </div>
                                <p className="text-5xl md:text-6xl font-bold mb-2 text-[#26d04c]">
                                    {stat.value}
                                </p>
                                <p className="text-lg text-gray-100">
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
