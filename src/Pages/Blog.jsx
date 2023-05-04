import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-4/5 mx-auto'>
            <div className="card w-3/5 mx-auto my-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Tell us the differences between uncontrolled and controlled components</h2>
                    <p>Controlled components are components where the state is managed by React, while uncontrolled components are components where the state is managed by the DOM. Controlled components are typically used when you need to handle user input, while uncontrolled components are typically used when you need to access the input value imperatively.</p>

                </div>
            </div>
            <div className="card w-3/5 mx-auto my-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How to validate React props using PropTypes?</h2>
                    <p>PropTypes is a package that provides runtime type-checking for React props. To use PropTypes, you need to define a propTypes object in your component, with a property for each prop that you want to validate. PropTypes will throw a warning in the console if a prop is passed to the component that does not match the expected type.</p>

                </div>
            </div>
            <div className="card w-3/5 mx-auto my-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Tell us the difference between nodejs and express js.</h2>
                    <p>Node.js is a JavaScript runtime that allows you to run JavaScript on the server side, while Express.js is a web application framework for Node.js that provides a set of features for building web applications, such as routing, middleware, and templates. Node.js provides the platform for running JavaScript on the server, while Express.js provides the tools for building web applications on top of that platform.</p>

                </div>
            </div>
            <div className="card w-3/5 mx-auto my-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is a custom hook, and why will you create a custom hook?</h2>
                    <p>A custom hook is a JavaScript function that starts with the word 'use' and that allows you to reuse stateful logic across multiple components in a React application. You might create a custom hook to encapsulate complex logic that is used across multiple components, or to provide a simple and reusable API for interacting with a specific feature, such as a data fetching API. Custom hooks can help to improve code organization and make it easier to reason about complex stateful logic in a React application.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;