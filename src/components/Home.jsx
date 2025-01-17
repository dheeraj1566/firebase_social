import React from "react";
import Profile from "./Profile";

function Home() {

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      
      <main className="flex-grow flex justify-center items-center bg-gray-100">

        <div className="text-center">
        <Profile/>
        </div>
      </main>
    </div>
  );
}

export default Home;
