import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Services from "../components/Services";
import Investment from "../components/Investment";
import ROICalculator from "../components/ROICalculator";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ThemeProvider from "../../context/Theme";

export default function FarmingLandingPage() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Products />
          <Services />
          <Investment />
          <ROICalculator />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
