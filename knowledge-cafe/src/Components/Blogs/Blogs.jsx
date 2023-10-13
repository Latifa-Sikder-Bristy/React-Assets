import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const Blogs = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    return (
        <div>
            <h2 className="text-2xl">Hellow Blogs</h2>
        </div>
    );
};

export default Blogs;