import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Form from "@/Components/Form";
import Footer from "@/Components/Footer"; 

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <Form />
      <Footer />
    </div>
  );
}
