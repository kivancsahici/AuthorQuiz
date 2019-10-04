import React from 'react';
import "./AddAuthorForm.css";

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            imageUrl:''
        }
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }
    onFieldChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
                <div className="AddAuthorForm__input">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}></input>
                </div>
                <div className="AddAuthorForm__input">
                    <label htmlFor="imageUrl">Image Url</label>
                    <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange}></input>
                </div>  
                <input type="submit" value="Add"/>
            </form>
        
    }
}

function AddAuthorForm({match, onAddAuthor}){
    return <div className="AddAuthorForm">
        <h1>Add Author</h1>
        <AuthorForm onAddAuthor={onAddAuthor}/>
    </div>
}

export default AddAuthorForm;