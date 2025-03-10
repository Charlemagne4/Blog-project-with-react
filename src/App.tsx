import { IoMdAddCircle } from 'react-icons/io';
import Navigation from './components/Navigation';
import PeopleToFollow from './components/PeopleToFollow';
import Topics from './components/Topics';
import TrendsList from './components/TrendsList';
import { BlogContextProvider } from './Shared/BlogContext';
import { useEffect, useState } from 'react';
import { Blog } from './Types/types';
import Modal from './components/Modal';
import BlogForm from './components/BlogForm';
import ArticleList from './components/ArticleList';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isModalOpen]);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setModalOpen(true);
  };

  const openModalForedit = (blog: Blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };

  return (
    <div>
      <BlogContextProvider>
        <Navigation />

        <div className="flex flex-col">
          {/* main Area */}
          <div className="flex w-full overflow-x-hidden">
            <div className="blog-section flex w-3/2 justify-center">
              <section className="w-full p-6">
                <div className="flex flex-col">
                  <button
                    onClick={openModalForNewBlog}
                    className="btn mb-4 w-fit self-center bg-white text-gray-900"
                  >
                    Add New Blog <IoMdAddCircle />
                  </button>
                  {/* articles List */}
                  <ArticleList onEdit={openModalForedit} />
                  {/* articles edition Modal */}
                  {isModalOpen && (
                    <Modal onClose={() => setModalOpen(false)}>
                      <BlogForm onClose={() => setModalOpen(false)} existingBlog={editingBlog} />
                    </Modal>
                  )}
                </div>
              </section>
            </div>
            <div className="flex flex-col">
              <div className="flex h-[50vh]">
                <PeopleToFollow />
                <TrendsList />
              </div>
              <Topics />
            </div>
          </div>
        </div>
      </BlogContextProvider>
    </div>
  );
}
export default App;
