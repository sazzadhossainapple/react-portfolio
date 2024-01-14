import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

function ProjectDetails5() {
    return (
        <section className="project-details">
            <h1 className="project-name">Toureest Website</h1>
            <div className="container">
                <div className="project-link">
                    <a
                        href="https://toureest.netlify.app/"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo
                    </a>

                    <a
                        href="
                        https://github.com/sazzadhossainapple/toureest"
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github Link
                    </a>
                </div>
                <div className="project-img">
                    <div className="project-images">
                        <img
                            src="https://i.ibb.co/85LP5H1/home-page.png"
                            alt=""
                        />
                    </div>
                    <div className="project-images">
                        <img
                            src="https://i.ibb.co/GQvmwPn/all-packge.png"
                            alt=""
                        />
                    </div>
                    <div className="project-images">
                        <img
                            src="https://i.ibb.co/S56gb3n/single-page.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="project-dec">
                    <p>
                        This is a Toureest website. Tour packages online booking
                        system
                    </p>

                    <article className="experience__details project-art">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <p>Users can buy tour packages online</p>
                        </div>
                    </article>
                    <article className="experience__details project-art">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <p>
                                All packages details show and google map added
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetails5;
