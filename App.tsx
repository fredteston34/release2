
import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Footer from './components/Footer.tsx';
import AnimatedSection from './components/AnimatedSection.tsx';
import { ArrowUpIcon } from './components/Icons.tsx';
import CookieConsent from './components/CookieConsent.tsx';
import Loader from './components/Loader.tsx';
import { useTranslations } from './hooks/useTranslations.tsx';
import SocialProofNotification from './components/SocialProofNotification.tsx';
import AccessibilityToolbar from './components/AccessibilityToolbar.tsx';

// Lazy loading components
const HowItWorks = lazy(() => import('./components/HowItWorks.tsx'));
const Timeline = lazy(() => import('./components/Timeline.tsx'));
const Products = lazy(() => import('./components/Products.tsx'));
const Benefits = lazy(() => import('./components/Benefits.tsx'));
const SavingsCalculator = lazy(() => import('./components/SavingsCalculator.tsx'));
const Gallery = lazy(() => import('./components/Gallery.tsx'));
const Videos = lazy(() => import('./components/Videos.tsx'));
const Testimonials = lazy(() => import('./components/Testimonials.tsx'));
const FAQ = lazy(() => import('./components/FAQ.tsx'));
const FunFacts = lazy(() => import('./components/FunFacts.tsx'));
const CookiePolicy = lazy(() => import('./components/CookiePolicy.tsx'));
const Contact = lazy(() => import('./components/Contact.tsx'));
const Blog = lazy(() => import('./components/Blog.tsx'));


const App: React.FC = () => {
    const [showScrollBtn, setShowScrollBtn] = useState(false);
    const { language, t } = useTranslations();

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollBtn(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
      <div className="bg-slate-50 min-h-screen text-slate-800 font-sans dark:bg-slate-900 dark:text-slate-200">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-0 focus:left-0 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2">
            {t('skip_to_content')}
        </a>
        <Header />
        <main id="main-content">
          <Hero />
          <Suspense fallback={<Loader />}>
            <AnimatedSection>
              <HowItWorks />
            </AnimatedSection>
            <AnimatedSection>
              <Timeline />
            </AnimatedSection>
            <AnimatedSection>
              <Products />
            </AnimatedSection>
            <AnimatedSection>
              <Benefits />
            </AnimatedSection>
            <AnimatedSection>
              <SavingsCalculator />
            </AnimatedSection>
             <AnimatedSection>
              <FunFacts />
            </AnimatedSection>
            <AnimatedSection>
              <Gallery />
            </AnimatedSection>
            <AnimatedSection>
              <Videos />
            </AnimatedSection>
            <AnimatedSection>
              <Testimonials />
            </AnimatedSection>
            <AnimatedSection>
              <FAQ />
            </AnimatedSection>
            <AnimatedSection>
              <Blog />
            </AnimatedSection>
            <AnimatedSection>
              <CookiePolicy />
            </AnimatedSection>
            <AnimatedSection>
              <Contact />
            </AnimatedSection>
          </Suspense>
        </main>
        <Footer />
        <button
            onClick={scrollToTop}
            aria-label={t('back_to_top')}
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 dark:bg-blue-500 dark:hover:bg-blue-600 ${showScrollBtn ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <ArrowUpIcon className="w-6 h-6" />
        </button>
        <CookieConsent />
        <SocialProofNotification />
        <AccessibilityToolbar />
      </div>
    );
};

export default App;