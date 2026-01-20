import { Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function ContactForm() {
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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            console.log('Form submitted:', formData);

            // Reset form
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
        <section
            id="contact"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        >
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Ready to Transform?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Get in touch with us to discuss your project and find
                        the perfect solution
                    </p>
                </div>

                {submitted && (
                    <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                        ✓ Thank you! We'll be in touch soon.
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-lg"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>

                        {/* Company Field */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors"
                                placeholder="Your Company"
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0063b9] focus:ring-2 focus:ring-[#0063b9]/20 transition-colors resize-none"
                            placeholder="Tell us about your project..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#26d04c] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#22ba41] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {loading ? (
                            <>
                                <div className="animate-spin">⌛</div>
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send size={20} />
                                Send Message
                            </>
                        )}
                    </button>

                    <p className="text-center text-gray-600 text-sm mt-4">
                        We'll respond within 24 hours
                    </p>
                </form>
            </div>
        </section>
    );
}
