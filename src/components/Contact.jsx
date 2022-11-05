import { useEffect } from "react";
import { useState } from "react"
import { validateEmail } from "../constant";
const Contact = () =>{

    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [check, setChecked] = useState(false)

    const handleChange = (e) =>{
        switch(e.target.id){
            case "first_name":
                setFirst_name(e.target.value)
                break;
            case "last_name":
                setLast_name(e.target.value)
                break;
            case "email":
                setEmail(e.target.value)
                break;
            case "message":
                setMessage(e.target.value)
                break;
            default:
                setChecked(e.target.checked)
                break;
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const inputs = document.querySelectorAll("input[type='text'], textarea")
        inputs.forEach(input => {
            if(input.value.trim() === ""){
                input.classList.add("error")
            }else if(input.id === "email" && !validateEmail.test(input.value)){
                input.classList.add("error")
                console.log("still here")
                input.nextSibling.textContent = "Please enter a valid email address"
            }else{
                input.classList.remove("error") 
            }
            
        })
        
    }
    const handleDisabled = (check) =>{
        const btn = document.querySelector("#btn__submit")
        if(check){
            btn.disabled = false
        }else{
            btn.disabled = true
        }
    }
    useEffect (() =>{
        handleDisabled(check)
    },[ check ]) 

    return (
        <div className="contact">
            <div className="container">
                <div className="title">
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form action="" className="contact-form">
                <div>
                    <div className="firstname lastname">
                        <div className="input-wrapper">
                            <label htmlFor="first_name">First name</label>
                            <input type="text" id="first_name" name="first_name" placeholder="Enter your first name" value={first_name} onChange={handleChange}/>
                            <p className="error-message">please enter your first name</p>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="last_name">Last name</label>
                            <input type="text" id="last_name" name="last_name" placeholder="Enter your last name" value={last_name} onChange={handleChange}/>
                            <p className="error-message">please enter your last name</p>
                        </div>
                    </div>
                    <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="yourname@email.com" value={email} onChange={handleChange}/>
                        <p className="error-message">please provide an email address</p>
                    </div>
                    <div className="input-wrapper">
                    <label htmlFor="message">Message</label>
                        <textarea type="text" id="message" name="message" placeholder="Send me a message and I'll reply you as soon as possible..." value={message} onChange={handleChange}/>
                        <p className="error-message">please enter a message</p>
                    </div>
                    <div className="input-checkbox">
                        <input type="checkbox" name="consent" id="consent" checked={check} onChange={handleChange}/>
                        <label htmlFor="consent">You agree to providing your data to Brownie who may contact you.</label>
                    </div>
                    <div>
                        <button id="btn__submit" onClick={handleSubmit}>Send message</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}
export default Contact;