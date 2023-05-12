import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './commponents/Layout/Home.jsx';
import MainHeader from './commponents/MainHeader/MainHeader.jsx';
import FeatureJobs from './commponents/FeatureJobs/FeatureJobs.jsx';
import JobDetails from './commponents/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <MainHeader></MainHeader>,
      },
      {
        path: 'job/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`https://raw.githubusercontent.com/itrabbi/fakedata-as9/main/${params.id}.json`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
