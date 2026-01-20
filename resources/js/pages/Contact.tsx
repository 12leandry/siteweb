import { useLanguage, useTheme } from '@/hooks/useLanguageTheme';
import NavbarMulti from '@/components/landing/NavbarMulti';
import FooterMulti from '@/components/landing/FooterMulti';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const { t, language } = useLanguage();
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log('Form submitted:', formData);

            setFormData({
                name: '',
                email: '',
                company: '',
                message: '',
            });

            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <NavbarMulti />

            <div
                className={theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}
            >
                {/* Header */}
                <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
                            theme === 'dark'
                                ? 'text-white'
                                : 'text-gray-900'
                        }`}>
                            {t('contact.title')}
                        </h1>
                        <p
                            className={`text-xl ${
                                theme === 'dark'
                                    ? 'text-gray-300'
                                    : 'text-gray-600'
                            }`}
                        >
                            {t('contact.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="max-w-2xl mx-auto">
                        {submitted && (
                            <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                ✓ {t('contact.success')}
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className={`rounded-lg p-8 md:p-12 shadow-lg ${
                                theme === 'dark'
                                    ? 'bg-gray-800'
                                    : 'bg-white'
                            }`}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Name Field */}
                                <div>
                                    <label
                                        className={`block text-sm font-semibold mb-2 ${
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        {t('contact.name')}
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#006080] focus:ring-2 focus:ring-[#006080]/20 transition-colors ${
                                            theme === 'dark'
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                        placeholder={
                                            language === 'fr'
                                                ? 'Jean Dupont'
                                                : 'John Doe'
                                        }
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label
                                        className={`block text-sm font-semibold mb-2 ${
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        {t('contact.email')}
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#006080] focus:ring-2 focus:ring-[#006080]/20 transition-colors ${
                                            theme === 'dark'
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                        placeholder="email@example.com"
                                    />
                                </div>

                                {/* Company Field */}
                                <div className="md:col-span-2">
                                    <label
                                        className={`block text-sm font-semibold mb-2 ${
                                            theme === 'dark'
                                                ? 'text-white'
                                                : 'text-gray-900'
                                        }`}
                                    >
                                        {t('contact.company')}
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#006080] focus:ring-2 focus:ring-[#006080]/20 transition-colors ${
                                            theme === 'dark'
                                                ? 'bg-gray-700 border-gray-600 text-white'
                                                : 'bg-white border-gray-300 text-gray-900'
                                        }`}
                                        placeholder={
                                            language === 'fr'
                                                ? 'Votre Entreprise'
                                                : 'Your Company'
                                        }
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="mb-6">
                                <label
                                    className={`block text-sm font-semibold mb-2 ${
                                        theme === 'dark'
                                            ? 'text-white'
                                            : 'text-gray-900'
                                    }`}
                                >
                                    {t('contact.message')}
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#006080] focus:ring-2 focus:ring-[#006080]/20 transition-colors resize-none ${
                                        theme === 'dark'
                                            ? 'bg-gray-700 border-gray-600 text-white'
                                            : 'bg-white border-gray-300 text-gray-900'
                                    }`}
                                    placeholder={
                                        language === 'fr'
                                            ? 'Dites-nous comment nous pouvons vous aider...'
                                            : 'Tell us how we can help...'
                                    }
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#FF4D4D] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#E63D3D] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin">
                                            ⌛
                                        </div>
                                        {t('contact.sending')}
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        {t('contact.send')}
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <FooterMulti />
        </div>
    );
}
