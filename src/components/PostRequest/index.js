import {Component} from 'react'

import "./index.css"

class PostRequest extends Component {

    state = {emailVal: "",name: "",message: "",res: ""}

    nameInput = event => {
        this.setState({name: event.target.value})
    }


    emailInpput = event => {
        this.setState({emailVal: event.target.value})
    }
    
    messageInput = event => {
        this.setState({message: event.target.value})
    }

    submitButton = async event => {
        event.preventDefault()
        const {emailVal,name,message} = this.state
        console.log(emailVal,name,message)
        const userData = {
            "email" : emailVal,
            "message" : message,
            "name" : name
        }
        const options = {
            method : "POST",
            body : JSON.stringify(userData)
        }
        const response = await fetch("https://admin.srkprojects.com/web/api/client/v1/contact-us/",options)
        console.log(response)
        this.setState({emailVal: ""})
        this.setState({name: ""})
        this.setState({message: ""})
        //console.log(response.ok)
        if (response.ok) {
            this.setState({res : "You are a User"})
        } else {
            this.setState({res : "You are Not a User"})
        }
    }

    render() {
        const {emailVal,name,message,res} = this.state
        return (
            <form className='pr-container' onSubmit={this.submitButton}>
                <div className='pr-card-1'>
                    <p className='para-1-pr'>Name:</p>
                    <input type="text" placeholder='Type Your Name' value={name} className='email-input' onChange={this.nameInput} />
                </div>
                <div className='pr-card-1'>
                    <p className='para-1-pr'>Email:</p>
                    <input type="email" placeholder='Type an email' value={emailVal} className='email-input' onChange={this.emailInpput} />
                </div>
                <div className='pr-card-1'>
                    <p className='para-2-pr'>Message:</p>
                    <textarea rows="4" cols="40" placeholder='Type a Message' value={message} className='text' onChange={this.messageInput}></textarea>
                </div>
                <button type="submit" className='pr-button'>Submit</button>
                <p>{res}</p>
            </form>
        )
    }
}

export default PostRequest