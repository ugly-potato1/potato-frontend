import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Intro from './pages/Intro';
import Funding from './pages/Funding';
import Popup from './pages/Popup';
import InitMypage from './pages/MyPage/InitMypage/InitMypage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Main/>},
      {path: '/login', element: <Login/>},
      {path: '/intro', element: <Intro/>},
      {path: '/funding', element: <Funding/>},
      {path: '/popup', element: <Popup/>},
      {path: '/mypage', element: <InitMypage/>},

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
