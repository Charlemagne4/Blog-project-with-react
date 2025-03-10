import { useBlogs } from '../Shared/BlogContext';
import { Blog } from '../Types/types';
import ArticleCard from './ArticleCard';
interface ArticleListProps {
  onEdit: (blog: Blog) => void;
}
function ArticleList({ onEdit }: ArticleListProps) {
  const { blogs, deleteBlog } = useBlogs();
  return (
    <div>
      {blogs.map((blog) => (
        <ArticleCard
          key={blog.id}
          blog={blog}
          onDelete={() => deleteBlog(blog.id)}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
export default ArticleList;
