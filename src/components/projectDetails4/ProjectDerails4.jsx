import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

function ProjectDerails4() {
    return (
        <section className="project-details">
            <h1 className="project-name">Exixrs Real Estate</h1>
            <div className="container">
                <div className="project-link">
                    <a
                        href="https://exixrs-real-estates.netlify.app/"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo
                    </a>
                    <a
                        href="https://github.com/sazzadhossainapple/react-real-estate-website"
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github Server
                    </a>
                    <a
                        href="https://github.com/sazzadhossainapple/react-real-estate-website"
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
                            src="https://i.ibb.co/RDmcThF/exixrs-real-estate-2.png"
                            alt=""
                        />
                    </div>
                    <div className="project-images">
                        <img
                            src="https://i.ibb.co/vhnTRQR/exixrs-real-estate-5.png"
                            alt=""
                        />
                    </div>
                    <div className="project-images">
                        <img
                            src="https://i.ibb.co/Lk4rDKg/exisrs-real-estate-7.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="project-dec">
                    <p>
                        This is a real estate website. Buyers and Sellers can
                        rent and sell houses.
                    </p>

                    <article className="experience__details project-art">
                        <BsPatchCheckFill className="experience__details-icon" />
                        <div>
                            <p>
                                Buyers can buy house and sellers can sell their
                                house on this website.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default ProjectDerails4;
