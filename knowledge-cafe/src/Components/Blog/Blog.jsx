import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    //destructure 
    const { cover, author_img, title, author, posted_date, reading_time, hashtags } = blog;
    // console.log(blog);
    return (
        <div className='border-b-2 pt-8 space-y-4'>
            <div>
                <img className='mt-3 w-full' src={cover} alt="" />
            </div>
            <div className='flex justify-between mt-3'>
                <div className='flex'>
                    <img className='w-11' src={author_img} alt="" />
                    <div className='ml-4'>
                        <p className='font-bold text-base'>{author}</p>
                        <p className='font-semibold text-xs'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className='font-medium text-sm mt-3'>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-xl'>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl mt-3">{title}</h2>
            <div>
                <p className='text-gray-60 text-xl font-semibold'>
                    {
                        hashtags.map((hashtag, idx) => <span key={idx}><a href=""> #{hashtag}</a></span>)
                    }
                </p>
                <button
                    onClick={() => handleMarkAsRead(reading_time)}
                    class="underline text-blue-600 hover:text-blue-400 cursor-pointer">
                    Mark as read
                </button>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}
export default Blog;