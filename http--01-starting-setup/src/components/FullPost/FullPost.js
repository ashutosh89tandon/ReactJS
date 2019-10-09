import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state={
        statePost : null
    }
    componentDidUpdate()
    {
        if(this.props.id){
            if(!this.state.statePost || ( this.state.statePost &&  this.state.statePost.id !== this.props.id) )
            {
                axios.get('/posts/'+this.props.id).then(res=>{
                    this.setState({statePost : res.data});
                 });
            }
            
        }
        
    }

    deletePostHandler =()=>{
        axios.get('/posts/'+this.props.id).then(res=>{
                   console.log(res);
                 });
    };
    render () {
        let post = <p style={{textAlign : 'center'}}>Please select a Post!</p>;
        if(this.props.id )
        {
            post = <p style={{textAlign : 'center'}}>Loading!</p>;
        }
        if(this.state.statePost){
         post = (
            <div className="FullPost">
                <h1>{this.state.statePost.title}</h1>
                <p>{this.state.statePost.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                </div>
            </div>

        );
        }
        return post;
    }
}

export default FullPost;