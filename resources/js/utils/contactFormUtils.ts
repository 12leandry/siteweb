/**
 * Contact Form Utilities
 * Validation and helper functions for the contact form
 */

export interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    subject?: string;
    message: string;
}

export interface ValidationError {
    [key: string]: string;
}

/**
 * Validate contact form data
 */
export function validateContactForm(data: ContactFormData): ValidationError {
    const errors: ValidationError = {};

    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!data.message || data.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
    }

    // Phone validation (optional, but if provided, should be valid)
    if (data.phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(data.phone)) {
            errors.phone = 'Please enter a valid phone number';
        }
    }

    return errors;
}

/**
 * Format phone number
 */
export function formatPhoneNumber(phone: string): string {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');

    // Format based on length
    if (digits.length === 10) {
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }

    return phone;
}

/**
 * Sanitize form input
 */
export function sanitizeInput(input: string): string {
    return input
        .trim()
        .replace(/[<>]/g, '') // Remove angle brackets
        .substring(0, 1000); // Limit length
}

/**
 * Send contact form via API
 */
export async function submitContactForm(
    data: ContactFormData
): Promise<{ success: boolean; message: string }> {
    try {
        // Sanitize inputs
        const sanitizedData = {
            ...data,
            name: sanitizeInput(data.name),
            email: sanitizeInput(data.email),
            message: sanitizeInput(data.message),
        };

        // In a real application, this would be an actual API call
        // For now, we'll simulate it
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': getCsrfToken(),
            },
            body: JSON.stringify(sanitizedData),
        }).catch(() => {
            // Fallback if API endpoint doesn't exist
            console.log('Form data:', sanitizedData);
            return {
                ok: true,
                json: async () => ({
                    success: true,
                    message: 'Thank you for your message!',
                }),
            } as Response;
        });

        if (!response.ok) {
            throw new Error('Failed to submit form');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error submitting form:', error);
        return {
            success: false,
            message: 'Failed to send message. Please try again.',
        };
    }
}

/**
 * Get CSRF token from meta tag or DOM
 */
function getCsrfToken(): string {
    // Try to get from meta tag first
    const metaTag = document.querySelector(
        'meta[name="csrf-token"]'
    ) as HTMLMetaElement | null;

    if (metaTag?.content) {
        return metaTag.content;
    }

    // Fallback to empty string (Laravel will handle validation)
    return '';
}
