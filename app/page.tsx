"use client";
import React from "react";
import Image from "next/image";
import Word from "@/components/word";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutSection from "@/components/About";
import Purpose from "@/components/Purpose";
import ImpactNumbers from "@/components/Data";
import WaveTimeline from "@/components/Timeline";
const CompanyOverviewPage: React.FC = () => {
  return (
    <div className="min-vh-100">
      <AboutSection />
      <Purpose />
      <ImpactNumbers />
      <WaveTimeline />

      <Word />
    </div>
  );
};

export default CompanyOverviewPage;
