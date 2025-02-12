import { graphql } from "@generated/graphql/gql";

export const LatestPostsFragment = graphql(/* GraphQL */ `
  fragment LatestPostsFragment on LatestPostsBlock {
  	Parent {
  		key
	}
    Amount
  }
`);
