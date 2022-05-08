import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto '>
            <div className="md:flex w-full h-fit justify-around items-center my-8">
                <div className='md:w-1/2 w-full px-4 m-4 border border-pink-400 p-5 md:h-96 overflow-hidden'>
                    <h1 className='text-3xl font-bold text-gray-400'>Difference between javascript and node js</h1>
                    <p>
                    JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
                    </p>
                </div>
            <div className='md:w-1/2 w-full px-4 m-4 border border-pink-400 p-5  md:h-96 overflow-hidden'>
                <h1 className='text-3xl font-bold text-gray-400'>Differences between sql and nosql databases.</h1>

                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>

            <div className='md:w-1/2 w-full px-4 m-4 border border-pink-400 p-5  md:h-96 overflow-hidden'>
                <h1 className='text-3xl font-bold text-gray-400'>When should you use nodejs and when should you use mongodb</h1>
                <p>MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.

NodeJS's responsibilty is especially to execute your application.</p>
            </div>

            <div className='md:w-1/2 w-full px-4 m-4 border border-pink-400 p-5  md:h-96 overflow-hidden'>
                <h1 className='text-3xl font-bold text-gray-400'>What is the purpose of jwt and how does it work</h1>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            </div>


            </div>

            
        </div>
    );
};

export default Blog;