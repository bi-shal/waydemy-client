import React from 'react';

const Blog = () => {
    return (
        <div className='m-5 '>
            <h1>This is Blog Page...</h1>
            <div className='bg-gray my-4 border p-4'>
                <h1>What is Cors ?</h1>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>

            </div>

            <div className='bg-gray my-4 border p-4'> 
                <h1>Why are you using firebase ?</h1>
                <p>Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you. Therefore, implementing Firebase means plugging a ready-made backend into your client code to make it dynamic. Ultimately, it eliminates the need to write backend code from scratch and gives you a fully functional one instead.</p>
            </div>

            <div className='bg-gray my-4 border p-4'>
                <h1>How does the private route work ?</h1>
                <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
            </div>

            
        </div>
    );
};

export default Blog;