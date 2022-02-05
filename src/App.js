import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Platform from './components/Platform/Platform';
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team';
import Wallet from './components/Wallet/Wallet';

function App() {
  return (
   <div>
     <Header />
     <Hero />
     <Platform />
     <Wallet />
     <Roadmap />
     <Team />
     <Faq />
     <Footer />
   </div>
  );
}

export default App;
