import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../../Layout/Main';
import Error from '../../../pages/Share/Error/Error';
import Blog from '../../../pages/single-page/Blog/Blog';
import CheckOut from '../../../pages/single-page/CheckOut/CheckOut';
import Courses from '../../../pages/single-page/Courses/Courses';
import Detail from '../../../pages/single-page/Detail/Detail';
import Faq from '../../../pages/single-page/Faq/Faq';
import Home from '../../../pages/single-page/Home/Home';
import Login from '../../../pages/single-page/Login/Login';
import Register from '../../../pages/single-page/Register/Register';
import PrivateRoute from '../../Private-Route/PrivateRoute';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader: () => fetch (`http://localhost:5000/all`)
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/allnews/:id',
                element:<Detail></Detail>,
                loader:({params}) => fetch(`http://localhost:5000/allnews/${params.id}`)
            },
            {
                path:'/check/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/check/${params.id}`)
            },
            {
                path:'/*',
                element:<Error></Error>
            },
            
            
        ]
    }
])


// /allnews/${d.id}