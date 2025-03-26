import React from "react";

interface ProcessCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col items-center gap-5 w-80">
      <div className="w-80 h-[330px] relative overflow-hidden rounded-[20px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="text-[#FCFCFA] text-[25px] tracking-[5px] uppercase text-center absolute px-2.5 inset-0 flex items-center justify-center">
          {title}
        </div>
      </div>
      <p className="text-gray-400 text-[23px] font-light text-center tracking-[0.69px]">
        {description}
      </p>
    </article>
  );
};

export default ProcessCard;
