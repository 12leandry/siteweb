import { useTheme } from '@/hooks/useLanguageTheme';
import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
} from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function FooterMulti() {
    const currentYear = new Date().getFullYear();
    const { theme } = useTheme();

    const footerLinks = {
        Services: [
            'Web Development',
            'E-commerce',
            'Digital Marketing',
            'SEO Optimization',
            'UI/UX Design',
            'Mobile Apps',
        ],
        Company: [
            'About Us',
            'Our Team',
            'Careers',
            'Blog',
            'Case Studies',
            'Contact',
        ],
        Legal: [
            'Privacy Policy',
            'Terms of Service',
            'Cookie Policy',
            'Disclaimer',
        ],
    };

    const socialLinks = [
        { icon: Facebook, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Linkedin, href: '#' },
        { icon: Instagram, href: '#' },
    ];

    return (
        <footer
            className={`py-16 px-4 sm:px-6 lg:px-8 ${
                theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
            }`}
        >
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-[#FF4D4D] mb-4">
                            Digital
                        </h3>
                        <p
                            className={`text-sm ${
                                theme === 'dark'
                                    ? 'text-gray-400'
                                    : 'text-gray-600'
                            }`}
                        >
                            Transforming businesses through innovative digital
                            solutions and strategic marketing.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`p-2 rounded-lg transition-colors ${
                                            theme === 'dark'
                                                ? 'bg-gray-800 hover:bg-[#FF4D4D] text-white'
                                                : 'bg-gray-200 hover:bg-[#FF4D4D] text-gray-900 hover:text-white'
                                        }`}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-semibold mb-4">{category}</h4>
                            <ul className="space-y-2">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className={`transition-colors text-sm ${
                                                theme === 'dark'
                                                    ? 'text-gray-400 hover:text-[#FF4D4D]'
                                                    : 'text-gray-600 hover:text-[#FF4D4D]'
                                            }`}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div
                    className={`border-t ${
                        theme === 'dark'
                            ? 'border-gray-800'
                            : 'border-gray-200'
                    } pt-8`}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p
                            className={`text-sm ${
                                theme === 'dark'
                                    ? 'text-gray-400'
                                    : 'text-gray-600'
                            }`}
                        >
                            © {currentYear} Digital Solutions. All rights
                            reserved.
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className={`text-sm transition-colors ${
                                    theme === 'dark'
                                        ? 'text-gray-400 hover:text-[#FF4D4D]'
                                        : 'text-gray-600 hover:text-[#FF4D4D]'
                                }`}
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className={`text-sm transition-colors ${
                                    theme === 'dark'
                                        ? 'text-gray-400 hover:text-[#FF4D4D]'
                                        : 'text-gray-600 hover:text-[#FF4D4D]'
                                }`}
                            >
                                Terms
                            </a>
                            <a
                                href="#"
                                className={`text-sm transition-colors ${
                                    theme === 'dark'
                                        ? 'text-gray-400 hover:text-[#FF4D4D]'
                                        : 'text-gray-600 hover:text-[#FF4D4D]'
                                }`}
                            >
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
