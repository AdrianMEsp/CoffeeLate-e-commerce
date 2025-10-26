"use client";
import Image from "next/image";
import "flowbite";

export default function Carousel() {
  return (
    <div id="default-carousel" className="relative max-w-full" data-carousel="slide">
      <div className="relative overflow-hidden rounded-lg md:h-40">
        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
          <Image src="/assets/carousel1.png" alt="Slide 1" fill className="object-cover" />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image src="/assets/carousel2.png" alt="Slide 2" fill className="object-cover" />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image src="/assets/carousel3.png" alt="Slide 3" fill className="object-cover" />
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        <button type="button" className="w-3 h-3 rounded-full bg-gray-300" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-gray-300" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-gray-300" data-carousel-slide-to="2"></button>
      </div>

      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </span>
      </button>

      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </span>
      </button>
    </div>
  );
}
