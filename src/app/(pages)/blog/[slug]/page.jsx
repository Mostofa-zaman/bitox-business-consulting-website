import { allBlogDetailsData } from "@/components/helper/blogpagehelper";
import BlogDetailsPage from "@/components/blogpage/blogDetailsPage";

const BlogDetails = async ({ params }) => {
  const { slug } = await params;

  const blog = allBlogDetailsData.find((b) => b.slug === slug);

  const safeBlog = blog ?? {
    slug,
    batchName: "Blog",
    heroImage: allBlogDetailsData[0].heroImage,
    author: "Bitox Agency",
    authorRole: "Editor",
    authorImage: null,
    dateText: "2025",
    itmeText: "Bitox Agency",
    title: slug
      ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      : "Blog Post",
    intro:
      "We share insights, strategies, and stories from the world of digital business. Stay tuned for expert perspectives on branding, marketing, technology, and growth.",
  };

  return <BlogDetailsPage blog={safeBlog} />;
};

export default BlogDetails;









