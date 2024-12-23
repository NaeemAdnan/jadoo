import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import BookingSteps from './components/BookingSteps';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BookingSteps />
      <Footer />
    </div>
  );
}

export default App;