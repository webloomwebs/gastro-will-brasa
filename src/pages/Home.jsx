import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import MenuSection from "../components/MenuSection";
import GallerySection from "../components/GallerySection";
import ReservationSection from "../components/ReservationSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <div className="bg-[#1a1a18] text-[#f5f0e8] font-body scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ReservationSection />
      <FooterSection />
    </div>
  );
}