'use client'
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient'; // We'll use our shared client

export default function InvestorProfile() {
  // --- STATE MANAGEMENT ---
  // We create state variables to hold our dynamic data.
  // They start as null or 0 until we fetch the real data.
  const [level, setLevel] = useState(1);
  const [title, setTitle] = useState("New Investor");
  const [dayStreak, setDayStreak] = useState(0);
  const [currentXp, setCurrentXp] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextLevelXp = 1000; // We can make this dynamic later
  const progressPercentage = (currentXp / nextLevelXp) * 100;

  // --- DATA FETCHING ---
  // This useEffect hook runs once after the component loads.
  useEffect(() => {
    const fetchUserProfile = async () => {
      // First, get the current logged-in user
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        // Then, query the 'profiles' table for that user's specific profile
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single(); // .single() gets just one row

        if (error) {
          console.error("Error fetching profile:", error);
        }

        if (profile) {
          // If we find a profile, update our state variables
          setLevel(profile.level);
          setTitle(profile.title);
          setDayStreak(profile.day_streak);
          setCurrentXp(profile.xp);
        }
      }
      setIsLoading(false);
    };

    fetchUserProfile();
  }, []); // The empty array [] means this runs only once.

  if (isLoading) {
    return <div className="bg-[#1e293b] border border-slate-700 p-6 rounded-xl shadow-lg">Loading Profile...</div>
  }

  return (
    <div className="bg-[#1e293b] border border-slate-700 p-6 rounded-xl shadow-lg">
      <h3 className="font-semibold text-white mb-4">Investor Profile</h3>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🚀</span>
          <div>
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
        <p className="font-semibold text-white">"Asset Admiral" Title</p>
      </div>
    </div>
  );
}