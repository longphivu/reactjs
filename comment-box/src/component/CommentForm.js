import React from 'react';

class CommentForm extends React.Component {
	constructor() {
		super();
		this.state = {
			characters: 0
		}
	}
	render () {
		return (
			<form className='well comment-form' onSubmit={this._handleSubmit.bind(this)}>
				<label>New Comment</label>
				<div className="form-group">
					<input placeholder='Name:' className="form-control" ref={author => (this._author = author)}/>
					
					<textarea placeholder='Comment:' className="form-control" ref={body => (this._body = body)} onChange={this._getCharacterCount.bind(this)}/>
					
				</div>
				<p>{this.state.characters} characters</p>
				<div className="comment-form-actions">
		            <button type="submit" className='btn btn-primary'>
		            	Post comment
		            </button>
	            </div>
			</form>
		);
	}

	_getCharacterCount(e) {
		this.setState({
			characters: this._body.value.length
		})
	}

	_handleSubmit(event) {
		event.preventDefault();
		//form valication
		if (!this._author.value || !this._body.value) {
			alert("Please enter your name and comment");
      		return;
		}

		this.props.postComment(this._author.value, this._body.value);
		this._author.value = '';
    	this._body.value = '';

    	this.setState({characters: 0});
	}
}

export default CommentForm;