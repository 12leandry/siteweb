import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote:
                'Digital transformed our online presence completely. Our sales increased by 178% within 6 months!',
            rating: 5,
            author: 'Marie Dubois',
            company: 'Tech Startup Inc',
            avatar: '👩‍💼',
        },
        {
            quote:
                'The team was professional, responsive, and delivered beyond our expectations. Highly recommended!',
            rating: 5,
            author: 'Jean Martin',
            company: 'E-Commerce Solutions',
            avatar: '👨‍💼',
        },
        {
            quote:
                'Their SEO strategies helped us rank #1 on Google for all our target keywords. Game changer!',
            rating: 5,
            author: 'Sophie Laurent',
            company: 'Fashion Boutique',
            avatar: '👱‍♀️',
        },
        {
            quote:
                'Best investment we made in our business. The ROI has been exceptional and continuous.',
            rating: 5,
            author: 'Pierre Durand',
            company: 'Manufacturing Corp',
            avatar: '👨‍🔧',
        },
    ];

    const goToPrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Client Testimonials
                    </h2>
                    <p className="text-xl text-gray-600">
                        See what our satisfied clients have to say about our work
                    </p>
                </div>

                {/* Testimonial Card */}
                <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 min-h-96 flex flex-col justify-between">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <Star
                                key={i}
                                size={24}
                                className="fill-[#FF4D4D] text-[#FF4D4D]"
                            />
                        ))}
                    </div>

                    {/* Quote */}
                    <p className="text-2xl text-gray-900 mb-8 italic">
                        "{currentTestimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                        <div className="text-5xl">
                            {currentTestimonial.avatar}
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">
                                {currentTestimonial.author}
                            </p>
                            <p className="text-gray-600">
                                {currentTestimonial.company}
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-4 mt-8">
                        <button
                            onClick={goToPrevious}
                            className="bg-[#006080] text-white p-3 rounded-lg hover:bg-[#004a5f] transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={goToNext}
                            className="bg-[#FF4D4D] text-white p-3 rounded-lg hover:bg-[#E63D3D] transition-colors"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Pagination */}
                    <div className="flex gap-2 justify-center mt-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all ${
                                    index === currentIndex
                                        ? 'bg-[#FF4D4D] w-8'
                                        : 'bg-gray-300 w-2'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
