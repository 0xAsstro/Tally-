'use client'
import { useState, useEffect } from 'react';

export default function InvestorProfile() {
  // --- This is STATE ---
  // We use variables to hold our data. This makes the component dynamic.
  // In the future, we will fetch this data from your Supabase database.
  const [level, setLevel] = useState(12);
  const [title, setTitle] = useState("Portfolio Pro");
  const [dayStreak, setDayStreak] = useState(21);
  const [currentXp, setCurrentXp] = useState(450);
  const [nextLevelXp, setNextLevelXp] = useState(1000);
  const [nextReward, setNextReward] = useState('"Asset Admiral" Title');

  const progressPercentage = (currentXp / nextLevelXp) * 100;

  return (
    <div className="bg-[#1e293b] border border-slate-700 p-6 rounded-xl shadow-lg">
      <h3 className="font-semibold text-white mb-4">Investor Profile</h3>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🚀</span>
          <div>
            {/* We are now using our state variables instead of hardcoded text */}
            <p className="font-bold text-white">Level {level}</p>
            <p className="text-sm text-slate-400">{title}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-white">{dayStreak}</p>
          <p className="text-sm text-slate-400">Day Streak</p>
        </div>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2.5 my-4">
        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <p className="text-sm text-slate-400 mb-4 text-center">Level Progress: {currentXp} / {nextLevelXp} XP</p>
      <div className="bg-slate-800 p-3 rounded-md text-center">
        <p className="text-sm text-slate-400">Next Reward</p>
        <p className="font-semibold text-white">{nextReward}</p>
      </div>
    </div>
  );
}