import { data } from 'autoprefixer';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blog.json')
            .then((res) => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='md:w-2/3'>
            <h2 className='text-4xl'>blogs {blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blog.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blogs;