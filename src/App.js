import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Platform from './components/Platform/Platform';
import Wallet from './components/Wallet/Wallet';

function App() {
  return (
   <div>
     <Header />
     <Hero />
     <Platform />
     <Wallet />
     <Footer />
   </div>
  );
}

export default App;
