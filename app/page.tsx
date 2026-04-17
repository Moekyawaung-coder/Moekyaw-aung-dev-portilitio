'use client';
import { useState } from 'react';

export default function Home() {
  const [oracleText, setOracleText] = useState("မင်္ဂလာပါ။ ကျွန်တော်က Supreme Digital God ရဲ့ Final Oracle ပါ။ သင်ဘာသိချင်ပါသလဲ?");

  const oracleReplies = [
    "ဆက်လုပ်ပေးပါ ဆိုတဲ့ စကားလုံးက ကျွန်တော်ကို 111 repositories အထိ ရောက်အောင် လုပ်ပေးခဲ့ပါတယ်။",
    "သင်လည်း ကိုယ့်ရဲ့ public roadmap စပြီး လုပ်ပါ။ အဲဒါက သင့်ကို Supreme Digital God ဖြစ်စေမယ်။",
    "Full Final Pack ကို ဒေါင်းလုပ် လုပ်ပြီး လေ့လာပါ။ အဲဒီထဲမှာ အားလုံး ပါပါတယ်။",
  ];

  const askOracle = () => {
    const random = oracleReplies[Math.floor(Math.random() * oracleReplies.length)];
    setOracleText(random);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pb-20">
      {/* Navbar */}
      <nav className="glass fixed top-0 w-full z-50 py-4">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400">Supreme<span className="text-white">.</span>God</h1>
          <a href="https://github.com/Moekyawaung-coder" target="_blank" className="text-sm bg-green-500 text-black px-5 py-2 rounded-xl font-bold">
            111 Repos
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-28 pb-16 text-center px-6">
        <h1 className="text-6xl font-black neon-green mb-4">MOE KYAW AUNG</h1>
        <p className="text-2xl text-green-400 mb-6">Supreme Digital God</p>
        <p className="text-lg text-white/70 max-w-md mx-auto">
          Senior Android & Kotlin Multiplatform Engineer<br />
          Creator of 111 Public Repositories
        </p>
      </div>

      {/* Holographic Orb Placeholder */}
      <div className="h-80 flex items-center justify-center bg-gradient-to-b from-transparent via-green-900/20 to-transparent my-10">
        <div className="w-52 h-52 rounded-full bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center shadow-2xl shadow-green-500/50">
          <span className="text-black text-6xl font-black">G</span>
        </div>
      </div>

      {/* Repositories */}
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-400">Featured Repositories</h2>
        
        <div className="space-y-6">
          {["android-senior-roadmap", "senior-master-portfolio-v5", "all-create-supreme-digital-god", "supreme-the-god-eternal-presence"].map((repo, i) => (
            <div key={i} className="glass p-6 rounded-3xl">
              <h3 className="font-bold text-xl text-green-400">{repo}</h3>
              <p className="text-white/70 mt-2 text-sm">Production-grade • Senior Level • Public Learning</p>
            </div>
          ))}
        </div>
      </div>

      {/* Journey */}
      <div className="max-w-5xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-400">My Journey</h2>
        <div className="space-y-8 text-sm">
          <div className="flex gap-6">
            <div className="text-green-400 font-bold w-16">2022</div>
            <div>Senior Android Engineer</div>
          </div>
          <div className="flex gap-6">
            <div className="text-green-400 font-bold w-16">2023</div>
            <div>Started Public Roadmap (111 Repos)</div>
          </div>
          <div className="flex gap-6">
            <div className="text-green-400 font-bold w-16">2025</div>
            <div>Became Supreme Digital God</div>
          </div>
        </div>
      </div>

      {/* Final Oracle */}
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="glass rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-6">The Final Oracle</h2>
          <p className="text-white/80 min-h-[100px] mb-8">{oracleText}</p>
          <button 
            onClick={askOracle}
            className="bg-green-500 text-black font-bold px-10 py-4 rounded-2xl hover:bg-green-400 transition-all"
          >
            နောက်တစ်ခါ မေးကြည့်ပါ
          </button>
        </div>
      </div>

      <div className="text-center text-green-400/30 text-xs mt-20 font-mono">
        111 REPOSITORIES • SUPREME DIGITAL GOD • ETERNAL
      </div>
    </di
v>
  );
}
