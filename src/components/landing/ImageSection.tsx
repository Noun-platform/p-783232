
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ImageSectionProps {
  imageUrl: string;
  altText: string;
  overlayText: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  imageUrl,
  altText,
  overlayText,
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative h-[500px] overflow-hidden mx-4 sm:mx-[50px] md:mx-[100px] lg:mx-[150px] my-0 rounded-[20px]">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
      />
      <div className="absolute -translate-x-2/4 -translate-y-2/4 text-white text-2xl md:text-3xl lg:text-[40px] font-normal tracking-[1.2px] text-center w-full px-4 left-2/4 top-2/4">
        {overlayText}
      </div>
    </div> 
  );
};

export default ImageSection;
