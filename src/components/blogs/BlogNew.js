import React, { Component } from 'react';
import api from './../api/api';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class BlogNew extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = ({ title: this.state.title });
    const newblog = api.blogs.postBlogs(data);

    newblog.then((response) => {
      console.log(response)
      history.push('/');
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h1>New Blog</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
           Title:
           <input
             name="title"
             type="text"
             value={this.state.title}
             onChange={this.handleChange}
           />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}
export default BlogNew;
