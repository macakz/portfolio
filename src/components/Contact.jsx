import React from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { userID, serviceID } from './config'

function Contact () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => emailjs.send(serviceID, 'contactForm', data, userID)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });
    return (

        <div className="contactContainer">
            <h1>Flick me a message:</h1>
            <div className="formContainer">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="inputContainer">
                        <p>Name*</p>
                        <input {...register("fromName", { required: true, pattern: /^[A-Za-z]+$/i })} />
                    </div>
                    <div className="error">
                        {errors.fromName?.type === "required" && <span>This field is required</span>}
                        {errors.fromName?.type === "pattern" && <span>Please enter a valid name</span>}
                    </div>
                    <div className="inputContainer">
                        <p>Email*</p>
                        <input  {...register("fromEmail", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                    </div>
                    <div className="error">
                        {errors.fromEmail?.type === "required" && <span>This field is required</span>}
                        {errors.fromEmail?.type === "pattern" && <span>Please enter a valid email</span>}
                    </div>
                    <div className="inputContainer">
                        <p>Phone Number*</p>
                        <input  {...register("phoneNumber", { required: true, pattern: /([1-9][0-9]*)|0/ })} />
                    </div>
                    <div className="error">
                        {errors.phoneNumber?.type === "required" && <span>This field is required</span>}
                        {errors.phoneNumber?.type === "pattern" && <span>Please enter a valid phone number</span>}
                    </div>
                    <div className="inputContainer">
                        <p>Subject*</p>
                        <input  {...register("subject", { required: true, pattern: /^[a-z0-9]+$/i })} />
                    </div>
                    <div className="error">
                        {errors.phoneNumber?.type === "required" && <span>This field is required</span>}
                        {errors.phoneNumber?.type === "pattern" && <span>Please only enter numbers or letters</span>}
                    </div>
                    <div className="inputContainer">
                        <p>Message</p>
                        <textarea {...register("message", { required: true, pattern: /^[a-z0-9]+$/i })} />
                    </div>
                    <div className="error">
                        {errors.message?.type === "required" && <span>This field is required</span>}
                        {errors.message?.type === "pattern" && <span>Please only enter numbers or letters</span>}
                    </div>
                    <div>*Mandtory fields</div>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact
