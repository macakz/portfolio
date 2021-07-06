import React from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';


function Contact () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => emailjs.send('service_8advsz8', 'contactForm', data, 'user_209MN1gR3y2lDleTZJdhx')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });
    return (
        <div className="contactContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputContainer">
                    <p>Name:</p>
                    <input {...register("fromName", { required: true })} />
                </div>
                <div className="inputContainer">
                    <p>Email:</p>

                    <input  {...register("fromEmail", { required: true })} />
                </div>
                <div className="inputContainer">
                    <p>Phone Number:</p>
                    <input  {...register("phoneNumber", { required: true })} />
                </div>
                <div className="inputContainer">
                    <p>Subject:</p>

                    <input  {...register("subject", { required: true })} />
                </div>
                <div className="inputContainer">
                    <p>Message:</p>
                    <input {...register("message", { required: true })} />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Contact
