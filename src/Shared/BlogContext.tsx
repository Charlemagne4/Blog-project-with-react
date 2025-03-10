import { createContext, ReactNode, use, useState } from 'react';
import { Blog } from '../Types/types';

export interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderChildren {
  children: ReactNode;
}

export function BlogContextProvider({ children }: BlogProviderChildren) {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  function addBlog(newblog: Blog) {
    setBlogs([...blogs, newblog]);
  }
  function updateBlog(updatedblog: Blog) {
    setBlogs(blogs.map((blog) => (blog.id === updatedblog.id ? updatedblog : blog)));
  }
  function deleteBlog(id: number) {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  }

  return (
    <BlogContext.Provider value={{ addBlog, updateBlog, deleteBlog, blogs }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlogs() {
  const context = use(BlogContext);

  if (!context) {
    throw new Error('UseBlogs Must be used within a BlogProvider');
  }
  return context;
}
