import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogList from './BlogList';
import api from './../api/api';

class Blogs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      blogs: [],
      error: false,
    };
  }

  async componentDidMount() {
    this.initialFecth();
  }

  initialFecth() {
    const self = this;
    const blogs = api.blogs.getBlogs();
    blogs.then((response) => {
      self.setState({
        blogs: response.data,
        loading: false,
      });
    }).catch((error) => {
      console.log(error);
      self.setState({
        error: true,
        loading: false,
      });
    });
  }

  render() {
    return (
      <article >
        <p> <Link to={'/blogs/new'} className="btn btn-primary">Nuevo Blog</Link></p>
        <div className="col-md-4">
          <BlogList blogs={this.state.blogs} />
        </div>
      </article>
    );
  }
}
export default Blogs;
