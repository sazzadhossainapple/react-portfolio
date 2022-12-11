import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const ProjectDetails1 = () => {
  return (
    <section className="project-details">
      <h1 className="project-name">Online Products Resales</h1>
      <div className="container">
        <div className="project-link">
          <a
            href="https://e-shoppers-4c7ba.web.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/sazzadhossainapple/used-products-resale-server-side"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github Server
          </a>
          <a
            href="https://github.com/sazzadhossainapple/used-products-resale-clients-side"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github Client
          </a>
        </div>
        <div className="project-img">
          <div className="project-images">
            <img src="https://i.ibb.co/v4jfWpB/portfolio3.png" alt="" />
          </div>
          <div className="project-images">
            <img src="https://i.ibb.co/6ZRsHJk/project2-1.png" alt="" />
          </div>
          <div className="project-images">
            <img src="https://i.ibb.co/YczPPrG/project2-2.png" alt="" />
          </div>
        </div>
        <div className="project-dec">
          <p>
            This website Buyers can buy resale laptops and sellers can sell
            their used laptops on this website.
          </p>
          <article className="experience__details project-art">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                The latest technology is used in this website, React JS is used
                in FrontEnd, and Node Js and Express Js are used in the Backend.
                And the database is connected to the database using MongoDB.
              </p>
            </div>
          </article>
          <article className="experience__details project-art">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                Buyers can buy resale laptops and sellers can sell their used
                laptops on this website. For that, you have to register the
                login and choose the account type whether it is buyer or seller.
              </p>
            </div>
          </article>
          <article className="experience__details project-art">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                Three types of users can access this website: Buyer, Seller, and
                Admin. Buyers can buy a resale laptop from here. By booking a
                laptop, the buyer will show his products on the dashboard and
                the seller can add and delete his products from the dashboard.
                Admin can see All Sellers and All Buyers and can delete any
                buyer and seller.
              </p>
            </div>
          </article>
          <article className="experience__details project-art">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                If the seller wants to advertise any of his resale laptops, he
                can do so. It gives an option button from my product on its
                dashboard when that button is clicked. That product will show as
                a home page advertisement. And any buyer can see that
                advertisement product.
              </p>
            </div>
          </article>
          <article className="experience__details ">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                If the buyer books a laptop, then he can pay online through the
                card for the laptop ordered by him. The online payment system is
                implemented on the E-Shoppers website by using react stripe.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails1;
