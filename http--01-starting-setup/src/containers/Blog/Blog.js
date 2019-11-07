import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import Posts from '../Posts/Posts';
import './Blog.css';
import {Route,Link} from 'react-router-dom';

class Blog extends Component {

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname : '/new-post',
                                hash : '#submit',
                                search : '?quick-submit=true'
                            }} >New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post"  component={NewPost} />
            </div>
        );
    }
}

export default Blog;