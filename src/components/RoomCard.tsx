"use client";

import { Check, Users, BedDouble, Snowflake, Wifi, ArrowRight } from "lucide-react";

interface RoomCardProps {
  type: string;
  title: string;
  description: string;
  price: number;
  image: string;
  isAvailable: boolean;
  onBook: () => void;
  amenities: string[];
}

const RoomCard = ({ type, title, description, price, image, isAvailable, onBook, amenities }: RoomCardProps) => {
  return (
    <div className={`flex flex-col md:flex-row bg-white border ${isAvailable ? 'border-border' : 'border-gray-200 opacity-75'} overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 mb-6`}>
      {/* Imagem */}
      <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {!isAvailable && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-gray-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">Esgotado</span>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="md:w-2/3 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-amber text-[10px] font-bold uppercase tracking-[0.2em] mb-1 block">Acomodação Premium</span>
              <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">A partir de</p>
              <p className="text-2xl font-bold text-amber">{price} MT <span className="text-xs text-muted-foreground font-normal">/ noite</span></p>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm mb-6 font-body leading-relaxed line-clamp-2">
            {description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 mb-8">
            {amenities.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-foreground/80 font-body">
                <Check size={14} className="text-green-500" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Users size={16} /> {type === 'T1' ? '2 Adultos' : 'Até 5 Pessoas'}
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <BedDouble size={16} /> {type === 'T1' ? '1 Cama King' : '2 Quartos'}
            </div>
          </div>
          
          <button
            onClick={onBook}
            disabled={!isAvailable}
            className={`w-full sm:w-auto px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
              isAvailable 
                ? 'bg-primary text-primary-foreground hover:bg-amber hover:text-accent-foreground' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isAvailable ? (
              <>Reservar Agora <ArrowRight size={16} /></>
            ) : (
              'Indisponível'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;