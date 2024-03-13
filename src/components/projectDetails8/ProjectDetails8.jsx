import React from 'react';

function ProjectDetails8() {
    return (
        <section className="project-details">
            <h1 className="project-name">Teams 360</h1>
            <div className="container">
                <div className="project-link">
                    <a
                        href="https://teams360.nextgenitltd.com/"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo
                    </a>
                </div>
                <div className="project-img">
                    <div className="project-images">
                        <img
                            src="https://i.ibb.co/tc7WM7w/teams-1.png"
                            alt=""
                        />
                    </div>
                    <div className="project-images">
                        <img src="https://i.ibb.co/37vKKxy/admin.png" alt="" />
                    </div>
                    <div className="project-images">
                        <img src="https://i.ibb.co/86fZPg6/vendor.png" alt="" />
                    </div>
                </div>
                <div className="project-dec">
                    <p>
                        This website is a HRM software . Users can see the admin
                        and vendor dashboard.
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

export default ProjectDetails8;
