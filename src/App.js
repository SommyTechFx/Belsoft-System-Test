import "./App.css";
import About from "./components/Sections/About";
import Events from "./components/Sections/Events";
import Header from "./components/Sections/Header";
import Hero from "./components/Sections/Hero";
import Offer from "./components/Sections/Offer";
import Sponsor from "./components/Sections/Sponsor";
import WHAT_WE_DO from "./components/Sections/WHAT_WE_DO";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WHAT_WE_DO />
      <Offer />
      <About />
      <Sponsor />
      <Events />
    </div>
  );
}

export default App;
