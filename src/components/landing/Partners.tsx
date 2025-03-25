import React from "react";

const Partners = () => {
  // Array of partner logo URLs
  const partnerLogos = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/2cb08450ccc0b8de69666838b550e68f9e46a106",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/0747c4ee054aa2ef58e4a038839f8d888f61323a",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e4627b62393b7ee01d42fe1ccda069259b9f356f",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1fafbb05dc32916fcbf0d32587bba575ca920821",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1a891bde8965b25858043b7e874b5dc63baa6c55",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/bf0db5c588ff9122660ad3ff0d2e04cb09a31879",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a9083ee26229d6c61340d51fc7e67dbb46265e5c",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/14abbe67f306070313c9d245fc943b5793836fd5",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/d310f9e0601c3ed01d0c1dedd5adea7eefcc9731",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f4a8b4ec8ff61bb19ed5caf437e0baf01caed69e",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1f7d7aa731d71638ae26a7789c66db867ba783a3",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/11dc59a78dd5a6a6b83e4d79daf0b9f181aa775e",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6d71048b910863955ed759234b61cf7ba6b0f6dd",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b424cb45eb132be5ffa3e448432e4acb9ad9ee6c",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/ddcecc59d35d126f68659bc3d5ce250370df232a",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/eace1ac44e613e0b57f070029454e5cf30454448",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/21a1bf434e6d1e2ac8a8fc76ac6a3fa0e3aee185",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/2eb4d2128c92c4972cfe7957f29f11d2f74511a3",
  ];

  return (
    <section className="px-[149px] py-20 max-md:px-10 max-md:py-[60px]">
      <div className="text-center mb-[60px]">
        <h2 className="text-[40px] font-normal tracking-[1.2px] text-black mb-5">
          Our vendors have also worked with
        </h2>
        <p className="text-[25px] font-light tracking-[0.75px] text-black max-w-[614px] mx-auto my-0">
          No more gatekeeping, have access to the best of the best.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(6,1fr)] gap-[17px] items-center max-md:grid-cols-[repeat(4,1fr)] max-sm:grid-cols-[repeat(2,1fr)]">
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Partner"
            className="w-[149px] h-[61px] object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;
