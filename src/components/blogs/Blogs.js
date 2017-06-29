import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogList from './BlogList';
import api from './../api/api';

class Blogs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      blogs: [],
    };
  }

  async componentDidMount() {
    this.initialFecth();
  }

  async initialFecth() {
    var self = this;
    const blogs = axios.get('http://localhost:3002/blogs')
      .then(function (response) {
        self.setState({
          blogs: response.data,
          loading: false,
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.blogs);
    return (
      <article >
        <p> <Link to={'/blog/new'} className="btn btn-primary">Nuevo Blog</Link></p>
        <div className="col-md-4">
          <BlogList blogs={this.state.blogs} />
        </div>
      </article>
    );
  }
}
export default Blogs;
