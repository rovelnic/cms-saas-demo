import { LatestPostsFragmentFragment } from "@generated/graphql";
import { ElementProps } from "../element.types";

export interface LatestPostsBlockProps extends ElementProps<LatestPostsFragmentFragment> {}

export const LatestPostsBlockComponent: React.FC<LatestPostsBlockProps> = ({ element, elementKey, displaySettings, displayTemplateKey }) => {
  if (!element) {
    return null;
  }

  const { Parent, Amount } = element;
  console.log(element);

  return (
    <div className="latest_posts" data-epi-block-id={elementKey}>
      Parent key: {Parent?.key}, Number of items: {Amount}
    </div>
  );
};
