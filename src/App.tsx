import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {

  return (
    <main className="font-mont bg-light w-full min-h-screen">
      <NavBar />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
