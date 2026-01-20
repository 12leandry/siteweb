import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Portfolio() {
    const [visibleCards, setVisibleCards] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(
                            entry.target.getAttribute('data-index') || '0'
                        );
                        setVisibleCards((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[data-portfolio-card]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const caseStudies = [
        {
            title: 'E-Commerce Revenue Growth',
            company: 'Fashion Boutique',
            result: '+320% Sales',
            description: 'Redesigned online store and implemented SEO strategies',
            category: 'E-commerce',
            metrics: [
                { label: 'Revenue Increase', value: '320%' },
                { label: 'Traffic Growth', value: '+450%' },
                { label: 'Conversion Rate', value: '4.2%' },
            ],
            color: 'from-pink-500 to-rose-500',
        },
        {
            title: 'SaaS Platform Launch',
            company: 'Tech Startup',
            result: '15K Users',
            description: 'Built and launched cloud-based SaaS platform',
            category: 'Development',
            metrics: [
                { label: 'Active Users', value: '15K' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'Page Speed', value: '<100ms' },
            ],
            color: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Digital Marketing Campaign',
            company: 'B2B Services',
            result: '+75% Leads',
            description: 'Comprehensive marketing strategy with social media',
            category: 'Marketing',
            metrics: [
                { label: 'Lead Generation', value: '+75%' },
                { label: 'Brand Awareness', value: '+220%' },
                { label: 'ROI', value: '850%' },
            ],
            color: 'from-purple-500 to-indigo-500',
        },
        {
            title: 'Mobile App Development',
            company: 'Fintech Company',
            result: '500K Downloads',
            description: 'Native iOS/Android app with payment integration',
            category: 'Mobile',
            metrics: [
                { label: 'Downloads', value: '500K' },
                { label: 'Rating', value: '4.8/5' },
                { label: 'Daily Active', value: '120K' },
            ],
            color: 'from-green-500 to-emerald-500',
        },
        {
            title: 'Content & SEO Strategy',
            company: 'Media Publication',
            result: '1M+ Monthly Views',
            description: 'SEO optimization and content marketing strategy',
            category: 'SEO',
            metrics: [
                { label: 'Monthly Views', value: '1M+' },
                { label: 'Organic Traffic', value: '+580%' },
                { label: 'Keyword Rankings', value: '200+' },
            ],
            color: 'from-orange-500 to-amber-500',
        },
        {
            title: 'Brand Redesign & UX',
            company: 'Corporate Enterprise',
            result: '92% Satisfaction',
            description: 'Complete brand refresh and UX optimization',
            category: 'Design',
            metrics: [
                { label: 'User Satisfaction', value: '92%' },
                { label: 'Time on Site', value: '+35%' },
                { label: 'Bounce Rate', value: '-42%' },
            ],
            color: 'from-red-500 to-pink-500',
        },
    ];

    return (
        <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our Portfolio
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore our most successful projects and see how we've
                        helped businesses achieve remarkable growth
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            data-portfolio-card
                            data-index={index}
                            className={`group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                                visibleCards.includes(index)
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                            } hover:scale-105`}
                        >
                            {/* Image/Gradient Background */}
                            <div
                                className={`h-56 bg-gradient-to-br ${study.color} flex items-center justify-center relative overflow-hidden`}
                            >
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all"></div>
                                <div className="relative z-10 text-center text-white">
                                    <p className="text-5xl md:text-6xl font-bold mb-2">
                                        {study.result}
                                    </p>
                                    <p className="text-sm opacity-80">
                                        {study.category}
                                    </p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                    {study.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {study.company}
                                </p>
                                <p className="text-gray-700 mb-6">
                                    {study.description}
                                </p>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    {study.metrics.map((metric, idx) => (
                                        <div
                                            key={idx}
                                            className="text-center"
                                        >
                                            <p className="text-lg font-bold text-[#006080]">
                                                {metric.value}
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                {metric.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Link */}
                                <a
                                    href="#"
                                    className="inline-flex items-center text-[#FF4D4D] font-semibold hover:text-[#E63D3D] transition-colors group/link"
                                >
                                    View Case Study
                                    <ArrowRight
                                        size={20}
                                        className="ml-2 transform group-hover/link:translate-x-1 transition-transform"
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-block px-8 py-4 bg-[#006080] text-white font-semibold rounded-lg hover:bg-[#004a5f] transition-colors transform hover:scale-105"
                    >
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
}
