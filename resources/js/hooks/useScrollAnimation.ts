import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    margin?: string;
}

/**
 * Custom hook for scroll-based animations
 * Usage: const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
 */
export function useScrollAnimation(
    options: UseScrollAnimationOptions = {}
) {
    const { threshold = 0.1, margin = '0px' } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold,
                rootMargin: margin,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, margin]);

    return { ref, isVisible };
}

