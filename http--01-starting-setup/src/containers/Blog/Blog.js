import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state ={
        posts : [],
        selectedPostId : null,
        error : false
    };
    componentDidMount(){
        axios.get('/posts').then(res=>{
            const posts= res.data.slice(0,4);
            const updatedPosts=posts.map(post =>{
                return {
                    ...post,
                    author : 'Max'
                }
            })
            this.setState({posts : updatedPosts});
        }).catch((error) =>{
            this.setState({
                error : true
            });
        });
    }

    postSelectHandler=(id)=>{
            this.setState({selectedPostId : id});
    };
    render () {

        let postsArray = <div style={{textAlign : 'center'}}>Something went wrong!!!!</div>;

        if(!this.state.error)
        {
            postsArray = this.state.posts.map(post =>{
            return <Post title={post.title} key={post.id} 
            author ={post.author} 
            clicked = {()=>this.postSelectHandler(post.id)}  />;
            });
        }
        
        return (
            <div>
                <section className="Posts">
                    {postsArray}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;