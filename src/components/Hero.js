import React from "react";
import { Link } from "react-scroll";
export function Hero() {
    return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4">
    <h2 className="text-5xl font-extrabold mb-4">Hi, I'm Reuben</h2>
    <p className="text-xl max-w-xl text-gray-600">Passionate IT specialist</p>
    <Link to="projects" smooth duration={600} className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 cursor-pointer">View My Work</Link>
    </section>
    );
    }
// export function Hero() {
//     return (
//       <section
//         id="home"
//         className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white"
//       >
//         <div className="text-center fade-in">
//           <h1 className="text-5xl font-bold mb-4">Hi, I'm Reuben 👋</h1>
//           <p className="text-xl mb-6 max-w-xl mx-auto">
//             IT Graduate • Systems • Networks • Cloud • Problem Solver  
//           </p>
  
//           <a
//             href="#projects"
//             className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-medium transition-all"
//           >
//             View My Work
//           </a>
//         </div>
//       </section>
//     );
//   }
  