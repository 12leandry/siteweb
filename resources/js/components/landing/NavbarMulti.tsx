import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';

export default function NavbarMulti({ url }: { url: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: t('nav.home'), href: '/' },
        { label: t('nav.services'), href: '/services' },
        { label: t('nav.portfolio'), href: '/portfolio' },
        { label: t('nav.about'), href: '/about' },
        { label: t('nav.contact'), href: '/contact' },
    ];

    const isActive = (href: string) => {
        return url === href || url?.startsWith(href + '/');
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-transparent backdrop-blur-sm'
                    : 'bg-white shadow-lg'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <a className="flex items-center space-x-3">
                            <img src="/logo-icon.avif" alt="MPE Logo" className="h-40 w-auto" />
                            {/* <span
                                className={`text-l font-bold transition-colors ${
                                    isScrolled ? 'text-[#0063b9]' : 'text-[#0063b9]'
                                }`}
                            >
                                MPE <span className="text-[#26d04c]">DIGITAL</span> SOLUTIONS
                            </span> */}
                        </a>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 text-l">
                        {navLinks.map((link) => (
                            <Link key={link.label} href={link.href}>
                                <a
                                    className={`px-4 py-2 rounded-lg transition-colors ${
                                        isActive(link.href)
                                            ? 'bg-[#0063b9] text-white'
                                            : isScrolled
                                              ? 'text-[#0063b9] hover:text-[#0063b9]'
                                              : 'text-gray-900 hover:text-[#0063b9]'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </Link>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Language Switcher */}
                        <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
                            <button
                                onClick={() =>
                                    setLanguage(
                                        language === 'fr' ? 'en' : 'fr'
                                    )
                                }
                                className="px-3 py-1 rounded text-sm font-semibold transition-colors bg-gray-100 text-gray-900 hover:bg-gray-200"
                            >
                                <Globe size={16} className="inline mr-1" />
                                {language.toUpperCase()}
                            </button>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg transition-colors bg-gray-100 text-gray-900 hover:bg-gray-200"
                        >
                            {theme === 'light' ? (
                                <Moon size={20} />
                            ) : (
                                <Sun size={20} />
                            )}
                        </button>

                        {/* CTA Button */}
                        <Link href="/demander-un-devis">
                            <a className="bg-[#26d04c] text-white px-6 py-2 rounded-lg hover:bg-[#22ba41] transition-colors font-semibold">
                                {t('nav.quote')}
                            </a>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-gray-900"
                        >
                            {theme === 'light' ? (
                                <Moon size={20} />
                            ) : (
                                <Sun size={20} />
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={isScrolled ? 'text-white' : 'text-gray-900'}
                        >
                            {isOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div
                        className={`md:hidden border-t ${
                            theme === 'dark'
                                ? 'bg-gray-800 border-gray-700'
                                : 'bg-white border-gray-200'
                        }`}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <Link key={link.label} href={link.href}>
                                    <a
                                        className={`block px-3 py-2 rounded-md transition-colors ${
                                            isActive(link.href)
                                                ? 'bg-[#26d04c] text-white'
                                                : `${
                                                    theme === 'dark'
                                                        ? 'text-gray-100 hover:bg-gray-700'
                                                        : 'text-gray-900 hover:bg-gray-100'
                                }`
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                </Link>
                            ))}

                            {/* Mobile Language Switcher */}
                            <button
                                onClick={() => {
                                    setLanguage(
                                        language === 'fr' ? 'en' : 'fr'
                                    );
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                                    theme === 'dark'
                                        ? 'text-gray-100 hover:bg-gray-700'
                                        : 'text-gray-900 hover:bg-gray-100'
                                }`}
                            >
                                <Globe
                                    size={16}
                                    className="inline mr-2"
                                />
                                {language === 'fr' ? 'English' : 'Français'}
                            </button>

                            {/* Mobile CTA */}
                            <Link href="/demander-un-devis">
                                <a
                                    className="block px-3 py-2 bg-[#26d04c] text-white rounded-md hover:bg-[#22ba41] text-center mt-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t('nav.quote')}
                                </a>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
