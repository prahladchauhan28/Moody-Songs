import React from "react";
import Header from "./Header"
import Songs from "./Songs";
import Profile from "./Profile";



const MoodifyUI = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1622] text-white font-sans p-4">
      <div className="bg-[#0e1d2e] rounded-2xl p-6 w-[90vw] max-w-3xl shadow-2xl relative">  
       <Header/>
        {/* Profile and Mood */}
        <Profile/>
        {/* Recommendations */}
       <Songs/>
       
      </div>
    </div>
  );
};

export default MoodifyUI;
