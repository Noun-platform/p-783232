
import React from "react";

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
  return (
    <div className="relative h-[500px] overflow-hidden mx-[150px] my-0 rounded-[20px] max-sm:mx-5 max-sm:my-0">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
      />
      <div className="absolute -translate-x-2/4 -translate-y-2/4 text-white text-[40px] font-normal tracking-[1.2px] text-center w-full left-2/4 top-2/4">
        {overlayText}
      </div>
    </div>
  );
};

export default ImageSection;
