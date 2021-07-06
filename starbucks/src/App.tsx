import Nav from './Components/Sections/Nav';
import Header from './Components/Sections/Header';
import Hero from './Components/Sections/Hero';
import GettingStarted from './Components/Sections/GettingStarted';
import Favourites from './Components/Sections/Favourites';
import EndlessExtras from './Components/Sections/EndlessExtras';
import EarnStars from './Components/Sections/EarnStars';
import StarCode from './Components/Sections/StarCode';
import RulesAndInfo from './Components/Sections/RulesAndInfo';
import Footer from './Components/Sections/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Hero />
      <GettingStarted />
      <Favourites />
      <EndlessExtras />
      <EarnStars />
      <StarCode />
      <RulesAndInfo />
      <hr className="my-12" />
      <Footer />
    </div>
  );
}

export default App;
