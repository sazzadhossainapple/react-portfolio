import { createBrowserRouter } from 'react-router-dom';
import ProjectDetails from '../components/projectDetails/ProjectDetails';

import ProjectDetails1 from '../components/projectDetails1/ProjectDetails1';
import ProjectDetails2 from '../components/projectDetails2/ProjectDetails2';
import ProjectDerails4 from '../components/projectDetails4/ProjectDerails4';
import ProjectDetails5 from '../components/projectDetails5/ProjectDetails5';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/project1',
                element: <ProjectDetails />,
            },

            {
                path: '/project2',
                element: <ProjectDetails1 />,
            },
            {
                path: '/project3',
                element: <ProjectDetails2 />,
            },
            {
                path: '/project4',
                element: <ProjectDerails4 />,
            },
            {
                path: '/project5',
                element: <ProjectDetails5 />,
            },
        ],
    },
]);
