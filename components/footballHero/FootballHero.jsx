"use client"
import Image from "next/image";
import { FileText, MoveRight, Trophy, Zap } from "lucide-react";
import { FaTrophy } from "react-icons/fa";
import { footballHeroData, footballHeroIconMap } from "@/lib/data";
import StatesCard from "./StatesCard";

export default function FootballHero() {
  return (
    <section className="section-space bg-gray-50">
      <div className="container-width flex flex-col items-center gap-8 lg:flex-row ">
        <div className="flex gap-6 flex-col items-start">
          <div className="flex items-center text-xs font-medium text-gray-500 border-2 border-gray-300 px-4 py-2 rounded-full"> <Zap size={16} className="mr-2"/> REAL-TIME FOOTBALL DATA API</div>
          <h1 className=" mb-4">Power your app with real-time <span className="gradient-text"> football </span> data</h1>
          <p className="text-lg text-gray-700 mb-6">
            Get live scores, fixtures, standings, players, teams and much more. Trusted by developers worldwide.
          </p>

          <div className="flex gap-4">
            <a href="#" className="gradient-button">Get Started <MoveRight className="ml-4" /> </a>
            <a href="#" className="outline-button">View Docs <FileText className="mx-auto ml-4 text-blue-500" /> </a>
          </div>
          <StatesCard footballHeroData={footballHeroData}  footballHeroIconMap={footballHeroIconMap}/>
        </div>
        
        <div className="w-full">
          <h1></h1>
        </div>
      </div>
    </section>
  )
}
