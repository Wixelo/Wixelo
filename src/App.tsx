import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer isDark={isDark} onToggleTheme={toggleTheme} />
    </div>
  );
}
