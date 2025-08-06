import React from "react";
import {
  Github,
  Dribbble,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Pointer,
} from "lucide-react";
import emailjs from 'emailjs-com'

export default function Contact() {

//     const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "your_service_id",
//         "your_template_id",
//         e.target,
//         "your_user_id" // or user key to mail
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           alert("Message Sent!");
//         },
//         (error) => {
//           console.log(error.text);
//           alert("Something went wrong");
//         }
//       );
//   };


  return (
    <>
      <section id="contacts" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <span className="text-purple-400">#</span>contacts
            <div className="h-0 w-96 ml-5 border border-purple-400"></div>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="absolute left-6 grid grid-cols-3 gap-1">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-gray-600 rounded-full"
                  ></div>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md selection:text-black selection:bg-purple-400">
                I'm interested in freelance opportunities. However, if you have
                other request or question, don't hesitate to contact me
              </p>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-700 p-4">
                <h3 className="font-bold mb-2">Message me here</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 p-2 text-gray-400">
                    <form onSubmit={() => {
                         alert('Message Send Successfully')
                    }}>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        required
                        className="bg-transparent mb-2 border border-gray-400 rounded w-96 p-2 outline-offset-1"
                      />
                      <input
                        type="text"
                        placeholder="Type Message"
                        required
                        className="bg-transparent border border-gray-400 rounded ml-0 p-2 outline-offset-1"
                      />
                      <button
                        type="submit"
                        className="ml-4 p-2 bg-green-600 text-white text-bold hover:bg-green-700 rounded-lg hover:text-white"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-all cursor-pointer space-x-2 text-gray-400 ml-2">
                    <span className="hover:rotate-[7deg] transition-all">
                      ✉️
                    </span>
                    <a href="mailto:bansalyash316@gmail.com">
                      <span>bansalyash316@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
