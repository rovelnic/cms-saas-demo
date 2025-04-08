import React, { useState } from "react";

export type AutosizedImageProps = {
  src: string;
  alt?: string;
};

export const AutosizedImage: React.FC<AutosizedImageProps> = ({ src, alt = "" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={"object-contain w-full h-full"}
    />
  );
};
