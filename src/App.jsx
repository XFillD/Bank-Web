import s from "./styles";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components/index";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${s.paddingX} ${s.flexCenter}`}>
      <div className={`${s.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={` bg-primary ${s.flexStart}`}>
      <div className={`${s.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={` bg-primary ${s.paddingX} ${s.flexStart}`}>
      <div className={`${s.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
