import React from "react";
import { useForm } from "react-hook-form";


function Contact () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="contactContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputContainer">
                    <p>Name:</p>
                    <input {...register("name", { required: true })} />
                </div>
                <div className="inputContainer">
                    <p>Subject:</p>

                    <input  {...register("subject", { required: true })} />
                </div>
                <div className="inputContainer">
                    <p>Message:</p>
                    <input {...register("exampleRequired", { required: true })} />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Contact
