import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';

function App() {

  return (
    <main className="font-mont bg-light w-full min-h-screen">
      <NavBar />
      <About />
      <Footer />
    </main>
  );
}

export default App;
