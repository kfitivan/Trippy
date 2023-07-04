import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ServiceImg from "../assets/img1.jpg";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";

function Services() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={ServiceImg}
        title="Services"
        btnClass="show"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Services;
