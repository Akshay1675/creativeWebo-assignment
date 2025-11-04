import PaymentPartners from "@/components/PaymentPartners";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import CollectPayments from "@/components/CollectPayments";
import GettingStarted from "@/components/GettingStarted";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PaymentPartners />
      <CollectPayments />
      <GettingStarted />
      <Footer />
    </>
  );
}