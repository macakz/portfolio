import React from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { userID, serviceID } from '../config/mailConfig'
import '../CSS/Main.css'

function Contact () {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        emailjs.send(serviceID, 'contactForm', data, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text)
            }, (err) => {
                console.log('FAILED...', err)
            })
            .then(alert("Message sent"))
            .finally(reset())
    }
    return (
        <div className="contactContainer">
            <div className="contactTitle">
                <h1>Send me a message</h1>
            </div>
            <div className="formContainer">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputContainer">
                        <p>Name*</p>
                        <input {...register("fromName", { required: true, pattern: /^[A-Za-z]+$/i })} />
                    </div>
                    <div className="error">
                        {errors.fromName?.type === "required" && <p>Name field is required</p>}
                        {errors.fromName?.type === "pattern" && <p>Please enter a valid name</p>}
                    </div>
                    <div className="inputContainer">
                        <p>Email*</p>
                        <input  {...register("fromEmail", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                    </div>
                    <div className="error">
                        {errors.fromEmail?.type === "required" && <p>Email field is required</p>}
                        {errors.fromEmail?.type === "pattern" && <p>Please enter a valid email</p>}
                    </div>
                    <div className="inputContainer">
                        <p>Phone Number*</p>
                        <input  {...register("phoneNumber", { required: true, pattern: /([1-9][0-9]*)|0/ })} />
                    </div>
                    <div className="error">
                        {errors.phoneNumber?.type === "required" && <p>Phone Number field is required</p>}
                        {errors.phoneNumber?.type === "pattern" && <p>Please enter a valid phone number</p>}
                    </div>
                    <div className="inputContainer">
                        <p>Subject*</p>
                        <input  {...register("subject", { required: true })} />
                    </div>
                    <div className="error">
                        {errors.phoneNumber?.type === "required" && <p>Subject field is required</p>}
                    </div>
                    <div className="inputContainer">
                        <p>Message</p>
                        <textarea {...register("message", { maxLength: 250})} />
                    </div>
                    <div className="error">
                        {errors.message?.type === "maxLength" && <p>Sorry please shorten your message</p>}
                    </div>

                    <p>*Mandtory fields</p>
                    <div className="submit">
                        <input type="submit" />
                    </div>

                </form>
            </div>
        </div>

    )
}

export default Contact
