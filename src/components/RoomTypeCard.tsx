"use client";

import { ArrowRight, Users, Maximize, BedDouble } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface RoomTypeCardProps {
  title: string;
  images: string[];
  size: string;
  capacity: string;
  bedType: string;
  onBook: () => void;
  onReadMore: () => void;
}

const RoomTypeCard = ({ title, images, size, capacity, bedType, onBook, onReadMore }: RoomTypeCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      {/* Image Carousel */}
      <div className="relative group">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={img} 
                    alt={`${title} - ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Pagination Dots (Visual only for now) */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}`} />
            ))}
          </div>
        </Carousel>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Maximize size={12} /> {size}
          </span>
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Users size={12} /> {capacity}
          </span>
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <BedDouble size={12} /> {bedType}
          </span>
        </div>

        <div className="mt-auto space-y-4">
          <button 
            onClick={onReadMore}
            className="text-red-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
          >
            READ MORE <ArrowRight size={14} />
          </button>
          
          <button 
            onClick={onBook}
            className="w-full bg-[#C82820] hover:bg-[#A0201A] text-white font-bold py-4 rounded-full text-sm uppercase tracking-widest transition-colors shadow-lg"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomTypeCard;