import { FaBookmark, FaEdit, FaTrash } from 'react-icons/fa';
import { Blog } from '../Types/types';

interface ArticleCardProps {
  blog: Blog;
  onDelete: () => void;
  onEdit: (blog: Blog) => void;
}

function ArticleCard({ blog, onDelete, onEdit }: ArticleCardProps) {
  return (
    <div className="mb-2 flex w-full gap-x-4 rounded-lg p-4 shadow-md shadow-gray-500 transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <img
        //    src={blog.image}
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages4.fanpop.com%2Fimage%2Fphotos%2F22800000%2FFERRARI-458-ITALIA-GT-ferrari-22875543-1920-1030.jpg&f=1&nofb=1&ipt=1c7bdd46e60df766a3ace48786597be4de48f79532fb7e0aa4af43c5ab7c8963&ipo=images"
        alt={blog.title}
        className="aspect-square h-40 rounded-lg object-cover shadow-md"
      />
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-semibold text-gray-300"> {blog.title} </h3>
        <p className="flex-1 text-sm text-gray-400">{blog.desciption}</p>
        <span className="text-sm">{blog.time}</span>
        <div className="flex gap-x-3">
          <FaBookmark className="cursor-pointer text-gray-500 transition-colors duration-200 hover:text-gray-300" />
          <FaEdit
            className="cursor-pointer text-blue-500 transition-colors duration-200 hover:text-blue-300"
            onClick={() => onEdit(blog)}
          />
          <FaTrash
            onClick={onDelete}
            className="cursor-pointer text-red-500 transition-colors duration-200 hover:text-red-300"
          />
        </div>
      </div>
    </div>
  );
}
export default ArticleCard;
