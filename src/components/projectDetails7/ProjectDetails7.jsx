import React from 'react';

function ProjectDetails7() {
    return (
        <section className="project-details">
            <h1 className="project-name">Guardian Life Insurance</h1>
            <div className="container">
                <div className="project-link">
                    <a
                        href="https://www.guardianlife.com.bd/"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo
                    </a>
                </div>
                <div className="project-img">
                    <div className="project-images">
                        <img src="https://i.ibb.co/M89LXpf/glil-1.png" alt="" />
                    </div>
                    <div className="project-images">
                        <img src="https://i.ibb.co/kB3SH5m/glil-2.png" alt="" />
                    </div>
                    <div className="project-images">
                        <img src="https://i.ibb.co/jzVzRw6/glil-3.png" alt="" />
                    </div>
                </div>
                <div className="project-dec">
                    <p>
                        This website is a Insurance Company. Users can see the
                        CMS to company profile.
                    </p>

                    {/* <article className="experience__details project-art">
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
                            <p>After login,</p>
                        </div>
                    </article> */}
                </div>
            </div>
        </section>
    );
}

export default ProjectDetails7;
