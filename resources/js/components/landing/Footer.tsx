import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
} from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

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
        <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-[#FF4D4D] mb-4">
                            Digital
                        </h3>
                        <p className="text-gray-400 text-sm">
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
                                        className="bg-gray-800 hover:bg-[#FF4D4D] text-white p-2 rounded-lg transition-colors"
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
                            <h4 className="font-semibold text-white mb-4">
                                {category}
                            </h4>
                            <ul className="space-y-2">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-[#FF4D4D] transition-colors text-sm"
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
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Digital Solutions. All rights
                            reserved.
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#FF4D4D] text-sm transition-colors"
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#FF4D4D] text-sm transition-colors"
                            >
                                Terms
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#FF4D4D] text-sm transition-colors"
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
