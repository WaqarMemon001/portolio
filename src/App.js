import './App.scss';
import Navbar from './Sections/navbar_Section/Navbar';
import Intro from './Sections/Intro/Intro_Section'
import Aboutus from './Sections/About/Aboutus';
import Services from './Sections/Services/Services';
import Works from './Sections/Works/Works';
import Footer from './Sections/Footer/Footer';

// importing componants
import Menu from './componants/menu/Menu';



import { React, useState, useEffect } from 'react';


const App = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(max-width: 712px)');
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App" >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isDesktop={isDesktop} setIsDesktop={setIsDesktop} />
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} isDesktop={isDesktop} setIsDesktop={setIsDesktop} />
      <div className='sections'>
        <Intro />
        <Aboutus />
        <Services />
        <Works />
        <Footer />
      </div>



    </div >
  );
}

export default App;
