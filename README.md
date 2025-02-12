# SaaS Demo site

> [!NOTE]
> Please follow https://github.com/episerver/cms-saas-vercel-demo for general information about how to configure your CMS SaaS instance.

## TLDR

1. Create a new file, named `.env.local`.
2. In the `.env.local` file, enter "GRAPH_SINGLE_KEY=" and paste your `Single key` from step 3.
3. In the `.env.local` file, enter "CMS_URL=" and paste your `CMS url`, for example `app-mysuperapp.cms.optimizely.com`
4. Run `yarn install`.
5. Run `yarn codegen` to generate graphql queries.
6. Run `yarn dev` to start the site. It will run on `https://localhost:3000`