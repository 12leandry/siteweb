import CTASection from '@/components/landing/CTASection';
import ContactForm from '@/components/landing/ContactForm';
import Footer from '@/components/landing/Footer';
import Hero from '@/components/landing/Hero';
import NavbarMulti from '@/components/landing/NavbarMulti';
import Portfolio from '@/components/landing/Portfolio';
import Services from '@/components/landing/Services';
import Stats from '@/components/landing/Stats';
import Testimonials from '@/components/landing/Testimonials';
import WhyChooseUs from '@/components/landing/WhyChooseUs';

export default function Landing() {
    return (
        <div className="bg-white">
            <NavbarMulti />
            <Hero />
            <Services />
            <Portfolio />
            <WhyChooseUs />
            <Stats />
            <Testimonials />
            <ContactForm />
            <CTASection />
            <Footer />
        </div>
    );
}
