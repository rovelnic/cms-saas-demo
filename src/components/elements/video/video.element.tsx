import { VideoFragmentFragment } from "@generated/graphql";
import { useMemo } from "react";
import { ElementProps } from "../element.types";
import { GetVideoStyle } from "./video.style";

interface VideoElementProps extends ElementProps<VideoFragmentFragment> {}

export const VideoElementComponent: React.FC<VideoElementProps> = ({ element, elementKey, displaySettings, displayTemplateKey }) => {
  if (!element) {
    return null;
  }

  const classes = useMemo(() => {
    return GetVideoStyle(displaySettings);
  }, [displaySettings]);

  const videoData = useMemo(() => {
    let url = "";
    let alt = "";

    // Temporary cast as any due to type errors
    const graphVideo: any = element?.VideoUrl?.item;
    if (graphVideo?.Url){
      url = graphVideo.Url;
      alt = graphVideo.AltText;
    } else {
      url = element?.VideoUrl?.url?.default ?? "";
      alt = element?.VideoAltText ?? "";
    }

    return {
      url,
      alt,
    }

  }, [element]);

  return (
    <>
      {videoData.url && (
        <div className={classes} data-epi-block-id={elementKey}>
          <figure>
            <video controlsList="play">
              <source src={videoData.url} type="video/mp4" />
              <meta itemProp="contentUrl" content={videoData.url} />
              <meta itemProp="description" content={videoData.alt} />
            </video>
          </figure>
        </div>
      )}
    </>
  );
};
