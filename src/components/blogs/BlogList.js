import React, {PropTypes} from 'react';
// import CatListItem from './CatListItem';
import { Link } from 'react-router-dom';


const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map(blog =>
        <li
          className="list-group-item"
          key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            {blog.title}
          </Link>
        </li>,
      )}
    </div>
  );
};

export default BlogList;
