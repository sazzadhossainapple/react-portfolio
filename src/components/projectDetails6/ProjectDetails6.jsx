import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

function ProjectDetails6() {
    return (
        <section className="project-details">
            <h1 className="project-name">Easy Travel BD</h1>
            <div className="container">
                <div className="project-link">
                    <a
                        href="https://easy-travel-bd.web.app/"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo
                    </a>
                    <a
                        href="https://github.com/nuruzaman-milon/easy-travel-bd-server"
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github Server
                    </a>
                    <a
                        href="https://github.com/nuruzaman-milon/easy-travel-bd-client"
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github Client
                    </a>
                </div>
                <div className="project-img">
                    <div className="project-images">
                        <img
                            src="https://i.ibb.co/Zh8Vgp2/home-travel.png"
                            alt=""
                        />
                    </div>
                    <div className="project-images">
                        <img
                            src="https://i.ibb.co/KLV4277/our-Partner.png"
                            alt=""
                        />
                    </div>
                    <div className="project-images">
                        <img
                            src="https://i.ibb.co/Jvm8KX7/cancel-ticket.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="project-dec">
                    <p>
                        This website is a bus ticketing system. Users can book
                        bus tickets online.
                    </p>

                    <article className="experience__details project-art">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <p>
                                If the user wants to go to the private route
                                then the user must have a login. Otherwise, not
                                access.
                            </p>
                        </div>
                    </article>
                    <article className="experience__details project-art">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <p>
                                Data is loaded from server-side API through
                                react router Dom and shown on the display.{' '}
                            </p>
                        </div>
                    </article>
                    <article className="experience__details project-art">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <p>
                                After login, the user's validity will be checked
                                using JWT from the server side.{' '}
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetails6;
