import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentBox extends Component {
	constructor() {
		super();
		this.state = {
			showComment: true,
			comments: [
				{	id: 1, author: "Long",		body: "Hello, how are you?", avatarUrl:"img/defaultavatar.png"	},
				{	id: 2, author: "San",		body: "I'm San. Nice to meet you.",avatarUrl:"img/defaultavatar.png"	}
			]
		}
	};

	render () {
		const comments = this._getComments() || [];
		let buttonText = "Show Comments";
		let commentNodes;

		if (this.state.showComment) {
			commentNodes = <div className="comment-list">{comments}</div>;
			buttonText = "Hide Comments";
		}

		return (
			<div className="container comment-box">
	        	<h3>Comments</h3>
	        	{this._getPopularMessage(comments.length)}
	        	<a href="#" onClick={this._toggleComments.bind(this)}>{buttonText}</a>
	        	<h4 className="comment-count">{this._getCommentsCount(comments.length)}</h4>
	        	{commentNodes}
	        	<Comment />
	        	<CommentForm postComment={this._postComment.bind(this)}/>
	    
	    	</div>
		)
	};

	_postComment(_author, _body) {
		let newComment = {
			id: this.state.comments.length + 1,
			author: _author,
			body: _body,
			avatarUrl: "../img/defaultavatar.png"
		};
		this.setState({
			comments: this.state.comments.concat(newComment)
		});
	};

	_toggleComments () {
		this.setState({
			showComment: !this.state.showComment
		})
	};

	_getPopularMessage(commentCount) {
		if (commentCount > 1) {
			return (
				<div>This post is getting popular, don't miss it out!</div>
			)
		}
	}

	_getCommentsCount(commentCount) {
		if (commentCount === 0) {
			return "No comment yet!";
		} else if (commentCount === 1) {
			return "1 comment";
		} else {
			return `${commentCount} comments`;
		}

	}
	_getComments() {
		const COMMENT_DATA = this.state.comments;
		return (COMMENT_DATA.map(comment => 
			<Comment 	deleteComment={this._deleteComment.bind(this)} 
						id={comment.id}
						key={comment.id} 
						author={comment.author} 
						body={comment.body}
						avatarUrl={comment.avatarUrl}
			/>)
		);
	};

	_deleteComment(id){
		console.log('delete:'+id);
		const comments2 = this.state.comments.filter(comment => comment.id !== id);
		this.setState({
			comments: comments2
		})
	}
}

export default CommentBox;