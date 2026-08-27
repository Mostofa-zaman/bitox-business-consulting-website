import { allBlogDetailsData } from "@/components/helper/blogpagehelper";
import BlogDetailsPage from "@/components/blogpage/blogDetailsPage";

const BlogDetails = async ({ params }) => {
  const { slug } = await params;

  const blog = allBlogDetailsData.find((b) => b.slug === slug);

  return <BlogDetailsPage blog={blog} />;
};

export default BlogDetails;