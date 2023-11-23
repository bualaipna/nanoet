import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
// import './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import QuestionBox from './component/Question';
import Photo from './Quiz/Quiz1.jsx';
import Photo1 from './Quiz/Quiz2.jsx';

const router = createBrowserRouter([
  {
    path: "/QuestionBox",
    element: <QuestionBox />,
  },
  {
    path: "/Photo",
    element: <Photo/>,
  },
  {
    path: "/Photo1",
    element: <Photo1/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)