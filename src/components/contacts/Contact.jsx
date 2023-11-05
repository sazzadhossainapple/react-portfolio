import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm(
    //         'service_j88tghf',
    //         'template_jphni1p',
    //         form.current,
    //         'j4N0x_xLcpNo4wNTq'
    //     );
    //     // .then(
    //     //   (result) => {
    //     //     console.log(result.text);
    //     //   },
    //     //   (error) => {
    //     //     console.log(error.text);
    //     //   }
    //     // );

    //     e.target.reset();
    //     toast.success('Your message sent successfully');
    // };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_j88tghf',
                'template_jphni1p',
                form.current,
                'j4N0x_xLcpNo4wNTq'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                    toast.success('Your message sent successfully');
                },
                (error) => {
                    console.log(error.text);
                    toast.error('There was an error sending your message');
                }
            );
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>sazzadapple199@gmail.com</h5>
                        <a
                            href="mailto:sassadapple199@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+8801775389591</h5>
                        <a
                            href="https://wa.me/+8801775389591"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                </div>

                {/* END OF CONTACT OPTIONS */}

                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="btn btn-primary contact-btn"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
