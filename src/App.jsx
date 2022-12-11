import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <Header />
      <Nav />
      <About />
      <Experience /> */}
      {/* <Services /> */}
      {/* <Portfolio />
      <Resume /> */}
      {/* <Testimonials /> */}
      {/* <Contact />
      <Footer /> */}
    </>
  );
};

export default App;
