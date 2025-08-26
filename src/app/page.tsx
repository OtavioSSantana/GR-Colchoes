import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Footer } from "./_components/footer";
import { Place } from "./_components/place";
import { AboutUs } from "./_components/aboutus";
import { ProductCarousel } from "./_components/productcarousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>

      <div>
        <Hero/>
        <ProductCarousel />
        <AboutUs />
        <Place />
        <Footer/>
      </div>
    </div>
  );
}
