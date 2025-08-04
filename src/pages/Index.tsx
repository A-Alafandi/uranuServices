import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Header />
            <main>
                <Hero />
                <Services />
                <Features />
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default Index;