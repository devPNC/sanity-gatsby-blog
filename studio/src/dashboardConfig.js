export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62ce2cf0f69f9220ca474d77",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6icun1ip",
                  apiId: "ca82f55d-00ea-444f-83a9-3892b8ea74eb",
                },
                {
                  buildHookId: "62ce2cf1db83ad1f94762f6d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-8t3ae6wm",
                  apiId: "5b9ed3e2-0c2a-4e70-9920-a2690571493f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/devPNC/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-8t3ae6wm.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
