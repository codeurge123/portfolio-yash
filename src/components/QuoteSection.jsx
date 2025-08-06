import React from "react";

export default function QuoteSection() {
  return (
    <>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="border border-gray-700 p-8 relative">
            <div className="absolute -top-3 left-4 bg-gray-900 px-2">
              <span className="text-2xl text-gray-500">"</span>
            </div>
            <blockquote className="text-sm text-center mb-4 selection:text-black selection:bg-purple-400">
              As a developer, you’re not just writing code — you’re crafting
              solutions, solving problems, and building tools that can shape how
              people live and work. Every line of code is a step toward creating
              something meaningful
            </blockquote>
            <div className="absolute -bottom-3 right-4 bg-gray-900 px-2">
              <span className="text-2xl text-gray-500">"</span>
            </div>
            <cite className="block text-right text-gray-400 selection:text-black selection:bg-purple-400 ">
              - Dr. Who
            </cite>
          </div>
        </div>
      </section>
    </>
  );
}
