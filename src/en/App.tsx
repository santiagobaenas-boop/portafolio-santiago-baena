import Cursor from '../components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SobreMi from './components/SobreMi';
import Skills from './components/Skills';
import ProyectosDiseno from './components/ProyectosDiseno';
import EdicionVideo from './components/EdicionVideo';
import DynastyStudio from './components/DynastyStudio';
import Contacto from './components/Contacto';

export default function AppEn() {
  return (
    <>
      <div id="grain" aria-hidden="true" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <SobreMi />
        <Skills />
        <ProyectosDiseno />
        <EdicionVideo />
        <DynastyStudio />
        <Contacto />
      </main>
    </>
  );
}
