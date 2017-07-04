import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Blog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      title: '',
      id: '',
    };
  }

  async componentDidMount() {
    this.initialFecth();
  }

  async initialFecth() {
    const self = this;
    const blogId = this.props.match.params.id;
    axios.get(`http://localhost:3002/blogs/${blogId}`)
      .then(function (response) {
        self.setState({
          title: response.data.title,
          id: response.data.id,
          loading: false,
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const blog = this.state;
    return (
      <article >
        <p>Blog</p>
        <p>{blog.title}</p>
        <p>{blog.id}</p>
        <p><Link to={'/'} className="btn btn-primary">Regresar</Link></p>
      </article>
    );
  }
}
export default Blog;
