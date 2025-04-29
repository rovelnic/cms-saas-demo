import { ImageFragmentFragment } from "@generated/graphql";
import { useMemo } from "react";
import { ElementProps } from "../element.types";
import { GetImageStyles } from "./image.style";
import { AutosizedImage } from "@components/partials/autosized-image";

export interface ImageElementProps extends ElementProps<ImageFragmentFragment> {}

export const ImageElementComponent: React.FC<ImageElementProps> = ({ element, elementKey, displaySettings, displayTemplateKey }) => {
  if (!element) {
    return null;
  }

  const classes = useMemo(() => {
    return GetImageStyles(displaySettings);
  }, [displaySettings]);

  const imageData = useMemo(() => {
    let url = "";
    let alt = "";

    // Temporary cast as any due to type errors
    // const graphImage: any = element?.ImageUrl?.item;
    // if (graphImage?.Url){
    //   url = graphImage.Url;
    //   alt = graphImage.AltText;
    // } else {
    url = element?.ImageUrl?.url?.default ?? "";
    alt = element?.ImageAltText ?? "";
    // }

    return {
      url,
      alt,
    };
  }, [element]);

  return (
    <>
      {imageData.url && (
        <div data-epi-block-id={elementKey} className={classes}>
          <figure>
            <div className="relative">
              <AutosizedImage src={imageData.url} alt={imageData.alt} />
            </div>
          </figure>
        </div>
      )}
    </>
  );
};
