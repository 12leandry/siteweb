/**
 * Scroll Animations Component
 * Provides smooth fade-up animations when sections come into view
 */

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function ScrollFadeUp({
    children,
    className = '',
    delay = 0,
}: ScrollAnimationProps) {
    return (
        <div
            className={`animate-fade-up opacity-0 ${className}`}
            style={{
                animationDelay: `${delay}ms`,
                animationFillMode: 'forwards',
            }}
        >
            {children}
        </div>
    );
}

export function ScrollScaleIn({
    children,
    className = '',
    delay = 0,
}: ScrollAnimationProps) {
    return (
        <div
            className={`animate-scale-in opacity-0 ${className}`}
            style={{
                animationDelay: `${delay}ms`,
                animationFillMode: 'forwards',
            }}
        >
            {children}
        </div>
    );
}

export function ScrollSlideLeft({
    children,
    className = '',
    delay = 0,
}: ScrollAnimationProps) {
    return (
        <div
            className={`animate-slide-in-left opacity-0 ${className}`}
            style={{
                animationDelay: `${delay}ms`,
                animationFillMode: 'forwards',
            }}
        >
            {children}
        </div>
    );
}

export function ScrollSlideRight({
    children,
    className = '',
    delay = 0,
}: ScrollAnimationProps) {
    return (
        <div
            className={`animate-slide-in-right opacity-0 ${className}`}
            style={{
                animationDelay: `${delay}ms`,
                animationFillMode: 'forwards',
            }}
        >
            {children}
        </div>
    );
}
