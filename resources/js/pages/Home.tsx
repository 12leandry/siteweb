import { useTheme } from '@/hooks/useLanguageTheme';
import NavbarMulti from '@/components/landing/NavbarMulti';
import FooterMulti from '@/components/landing/FooterMulti';
import Hero from '@/components/landing/Hero';
import ServicesGridHome from '@/components/home/ServicesGridHome';
import WhyChooseUsHome from '@/components/home/WhyChooseUsHome';
import CTASectionHome from '@/components/home/CTASectionHome';
import DistinguishesUsHome from '@/components/home/DistinguishesUsHome';
import Stats from '@/components/landing/Stats';
import AboutUsHome from '@/components/home/AboutUsHome';
import PortfolioCarouselHome from '@/components/home/PortfolioCarouselHome';
import TestimonialCarouselHome from '@/components/home/TestimonialCarouselHome';
import BlogHome from '@/components/home/BlogHome';
import VisionHome from '@/components/home/VisionHome';

export default function Home() {
    const { theme } = useTheme();

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <NavbarMulti />
            <Hero />
            <ServicesGridHome />
            <WhyChooseUsHome />
            <CTASectionHome />
            <DistinguishesUsHome />
            <Stats />
            <AboutUsHome />
            <PortfolioCarouselHome />
            <TestimonialCarouselHome />
            <BlogHome />
            <VisionHome />
            <FooterMulti />
        </div>
    );
}
