import { Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import {
    ContactFormData,
    submitContactForm,
    validateContactForm,
} from '@/utils/contactFormUtils';

interface ContactFormExtendedProps {
    showPhoneField?: boolean;
    showSubjectField?: boolean;
    submitButtonText?: string;
}

export default function ContactFormExtended({
    showPhoneField = false,
    showSubjectField = false,
    submitButtonText = 'Send Message',
}: ContactFormExtendedProps) {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
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

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Validate form
        const validationErrors = validateContactForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        try {
            // Submit form
            const result = await submitContactForm(formData);

            if (result.success) {
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    subject: '',
                    message: '',
                });

                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                setErrors({
                    submit: result.message,
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors({
                submit: 'An unexpected error occurred. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-lg"
        >
            {submitted && (
                <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-up">
                    ✓ Thank you! We'll be in touch soon.
                </div>
            )}

            {errors.submit && (
                <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    ✗ {errors.submit}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                            errors.name
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                : 'border-gray-300 focus:border-[#006080] focus:ring-[#006080]/20'
                        }`}
                        placeholder="John Doe"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                            errors.email
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                : 'border-gray-300 focus:border-[#006080] focus:ring-[#006080]/20'
                        }`}
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Company Field */}
                <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#006080] focus:ring-2 focus:ring-[#006080]/20 transition-colors"
                        placeholder="Your Company"
                    />
                </div>

                {/* Phone Field (Optional) */}
                {showPhoneField && (
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                                errors.phone
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                                    : 'border-gray-300 focus:border-[#006080] focus:ring-[#006080]/20'
                            }`}
                            placeholder="+1 (555) 000-0000"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.phone}
                            </p>
                        )}
                    </div>
                )}

                {/* Subject Field (Optional) */}
                {showSubjectField && (
                    <div className={showPhoneField ? '' : 'md:col-span-2'}>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#006080] focus:ring-2 focus:ring-[#006080]/20 transition-colors"
                            placeholder="How can we help?"
                        />
                    </div>
                )}
            </div>

            {/* Message Field */}
            <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${
                        errors.message
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                            : 'border-gray-300 focus:border-[#006080] focus:ring-[#006080]/20'
                    }`}
                    placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#26d04c] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#22ba41] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
                {loading ? (
                    <>
                        <div className="animate-spin">⌛</div>
                        Sending...
                    </>
                ) : (
                    <>
                        <Send size={20} />
                        {submitButtonText}
                    </>
                )}
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
                * Required fields. We'll respond within 24 hours
            </p>
        </form>
    );
}
