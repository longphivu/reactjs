import React from 'react';
import ava from '../img/defaultavatar.png';

class Comment extends React.Component{
	constructor(){
	    super();
	    this.state = {isAbusive:false};
	}
	render () {
		let commentBody;
		if (!this.state.isAbusive) {
			commentBody = this.props.body;
		} else {
			commentBody = <em>This comment is marked as abusive.</em>;
		}
		return (
			<div className='well comment'>
				<img style={{width: 50, height: 50}}  src={ava} alt={this.props.author + "'s picture"}/>
				<p className='comment-header'>{this.props.author}</p>
				<p className='comment-body'>{commentBody}</p>
				<div className='comment-action'>
					<a href="#" onClick={this._deleteComment.bind(this)}>Delete Comment</a>
					<a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
				</div>
			</div>
		)
	};

	_toggleAbuse(event) {
		event.preventDefault();
		this.setState({
			isAbusive: !this.state.isAbusive
		})
	}

	_deleteComment(event) {
		event.preventDefault();
		this.props.deleteComment(this.props.id);
	}
};

Comment.defaultProps = {
  author: "Default Author",
  body: 'Default Comment'
};


export default Comment;