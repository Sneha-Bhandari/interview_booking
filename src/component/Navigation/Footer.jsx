
// import Link from "next/link";
// import {
//   CalendarCheck,
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Instagram,
//   Linkedin,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-footer text-white">

//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 md:px-8 lg:grid-cols-4">

//         {/* Brand */}
//         <div>
//           <Link href="/" className="mb-5 flex items-center gap-3">
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-secondary">
//               <CalendarCheck size={27} />
//             </div>

//             <div>
//               <h2 className="text-xl font-extrabold">
//                 Interview<span className="text-secondary">Hub</span>
//               </h2>
//               <p className="text-[10px] tracking-widest text-gray-300">
//                 BOOK. PREPARE. SUCCEED.
//               </p>
//             </div>
//           </Link>

//           <p className="text-sm leading-7 text-gray-300">
//             Simplifying the interview process. Discover opportunities,
//             schedule interviews, and take the next step in your career.
//           </p>

//           <div className="mt-5 flex gap-3">
//             {[Facebook, Instagram, Linkedin].map((Icon, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 aria-label={`Social media ${index + 1}`}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-secondary hover:text-primary"
//               >
//                 <Icon size={18} />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="mb-5 text-lg font-bold text-secondary">
//             Quick Links
//           </h3>

//           <ul className="space-y-3 text-sm text-gray-300">
//             {[
//               ["Home", "/"],
//               ["Find Interviews", "/interviews"],
//               ["About Us", "/about"],
//               ["Contact Us", "/contact"],
//             ].map(([name, href]) => (
//               <li key={name}>
//                 <Link href={href} className="transition hover:text-secondary">
//                   {name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Candidate Links */}
//         <div>
//           <h3 className="mb-5 text-lg font-bold text-secondary">
//             For Candidates
//           </h3>

//           <ul className="space-y-3 text-sm text-gray-300">
//             <li>
//               <Link href="/register" className="hover:text-secondary">
//                 Create Account
//               </Link>
//             </li>
//             <li>
//               <Link href="/interviews" className="hover:text-secondary">
//                 Browse Interviews
//               </Link>
//             </li>
//             <li>
//               <Link href="/my-bookings" className="hover:text-secondary">
//                 My Bookings
//               </Link>
//             </li>
//             <li>
//               <Link href="/profile" className="hover:text-secondary">
//                 My Profile
//               </Link>
//             </li>
//             <li>
//               <Link href="/login" className="hover:text-secondary">
//                 Sign In
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="mb-5 text-lg font-bold text-secondary">
//             Get In Touch
//           </h3>

//           <div className="space-y-4 text-sm text-gray-300">
//             <div className="flex items-start gap-3">
//               <MapPin size={19} className="mt-1 shrink-0 text-secondary" />
//               <p>Nepal</p>
//             </div>

//             <div className="flex items-center gap-3">
//               <Phone size={18} className="shrink-0 text-secondary" />
//               <p>Contact Number</p>
//             </div>

//             <div className="flex items-center gap-3">
//               <Mail size={18} className="shrink-0 text-secondary" />
//               <p>Email Address</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="border-t border-white/10">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-gray-400 sm:flex-row md:px-8">
//           <p>
//             © {new Date().getFullYear()} InterviewHub. All rights reserved.
//           </p>

//           <div className="flex gap-5">
//             <Link href="/privacy-policy" className="hover:text-secondary">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="hover:text-secondary">
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
