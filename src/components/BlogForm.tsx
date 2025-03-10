import { useEffect, useState } from 'react';
import { useBlogs } from '../Shared/BlogContext';
import { Blog } from '../Types/types';
import { IoMdAdd } from 'react-icons/io';
import { MdOutlineEdit } from 'react-icons/md';

interface BlogProps {
  existingBlog: Blog | null;
  onClose: () => void;
}

function BlogForm({ existingBlog, onClose }: BlogProps) {
  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || '');
  const [desciption, setDescription] = useState(existingBlog?.desciption || '');
  const [image, setImage] = useState(existingBlog?.image || '');
  const [, setTime] = useState(existingBlog?.time || '');

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.desciption);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);
  function handleSubmit(): void {
    const blog: Blog = {
      id: existingBlog ? existingBlog.id : Date.now(),
      desciption,
      image,
      time: new Date().toLocaleString(),
      title
    };
    if (existingBlog) {
      updateBlog(blog);
      return onClose();
    }

    addBlog(blog);
    return onClose();
  }

  return (
    <div className="mx-auto w-[40vw] rounded-lg bg-gray-700 p-4">
      <h3 className="mx-2 mb-4 text-xl font-semibold text-gray-200">
        {existingBlog ? 'Edit Blog' : 'Add Blog'}
      </h3>
      <div className="mb-4 flex flex-col items-center justify-around space-y-4">
        <input
          className="input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          className="input"
          placeholder="Description"
          value={desciption}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <section className="flex justify-end gap-x-2">
        <button className="btn btn-soft btn-error" onClick={onClose}>
          Cancel
        </button>
        <button className="btn btn-soft btn-info" onClick={handleSubmit}>
          {existingBlog ? 'Edit' : 'Add'}
          {existingBlog ? <MdOutlineEdit /> : <IoMdAdd />}
        </button>
      </section>
    </div>
  );
}
export default BlogForm;
