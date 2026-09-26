import { Background } from './components/Background';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
