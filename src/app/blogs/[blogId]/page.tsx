import BlogDetails from '@/components/ui/BlogDetails';

type TBlogId = {
  params: {
    blogId: string;
  };
};

const BlogDetailPage = async ({ params }: TBlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: 'no-store',
  });
  const blog = await res.json();
  console.log(blog);
  return (
    <div className='my-10'>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailPage;
