
export default function Blog() {
    return (
        <div className="container mx-auto">
            <div class="p-2 mt-5 mb-10">
                <h1 class="text-center font-bold italic text-2xl mb-5 underline">Difference between Node.JS and Javascript
                </h1>
                <div class="flex flex-col w-full lg:flex-row">
                    <div class="grid flex-grow p-5 card shadow-2xl rounded-box place-items-center">
                        <h1 class="card-title underline">NodejS</h1>
                        <p class="text-xl font-medium " >NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                            <br />
                            It is a cross-platform, open-source JavaScript runtime environment that allows JavaScript to be run on the server.
                            <br />
                            It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately.</p>
                    </div>
                    <div class="divider lg:divider-horizontal"></div>
                    <div class="grid flex-grow p-5 card shadow-2xl rounded-box place-items-center">
                        <h1 class="card-title underline">Javascript</h1>
                        <p class="text-xl font-medium " > Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. <br />
                            It is an open-source, cross-platform, interpreted, lightweight scripting programming language that is used to develop dynamic and web applications. <br />
                            It is a programming language. It works in any browser that has a proper browser engine. </p>
                    </div>
                </div>
            </div>

            <div class="p-2 mt-5 mb-10">
                <h1 class="text-center font-bold italic text-2xl mb-5 underline">When should you use nodejs and when should you use mongodb?
                </h1>
                <div class="flex flex-col w-full lg:flex-row">
                    <div class="grid flex-grow p-5 card shadow-2xl rounded-box place-items-center">
                        <h1 class="card-title underline">MongoDB</h1>
                        <p class="text-xl font-medium " >NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases. <br />
                            MongoDB is the most popular of the new breed of non-relational NoSQL databases. Specifically, it's a document database, also called a document-oriented database or a document store. <br />
                            Document structures usually align with objects that developers are working with in code, which is a more flexible approach than the row-and-column table-oriented structure of a relational database. Developers can rework document (data) structures as their application requirements change over time. With this approach, data structures become like code — both are under developers' control.</p>
                    </div>
                    <div class="divider lg:divider-horizontal"></div>
                    <div class="grid flex-grow p-5 card shadow-2xl rounded-box place-items-center">
                        <h1 class="card-title underline">Node JS</h1>
                        <p class="text-xl font-medium " > Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript..
                            <br />
                            Micro-Services-based architecture lets you split your application into small units. Each part can independently deploy and scale; it does not matter if different programming languages and teams write it. You can also test the small units individually.
                            <br />
                            is the greatest tool for building real-time web applications. It provides cross-platform applications which run easily on any web. So you basically don't need anything extra for running up a node application. You only need for making one. </p>
                    </div>
                </div>
            </div>

            <div class="p-2 mt-5 mb-10">
                <h1 class="text-center font-bold italic text-2xl mb-5 underline">Differences between sql and no-sql databases.
                </h1>
                <div class="flex flex-col w-full lg:flex-row">
                    <div class="grid flex-grow p-5 card shadow-2xl rounded-box place-items-center">
                        <h1 class="card-title underline">SQL : relational</h1>
                        <p class="text-xl font-medium " >Tables with fixed rows and columns
                            <br />
                            Developed in the 1970s with a focus on reducing data duplication
                            <br />
                            These databases are not suited for hierarchical data storage.
                            <br />
                            are vertically scalable are table based</p>
                    </div>
                    <div class="divider lg:divider-horizontal"></div>
                    <div class="grid flex-grow p-5 card shadow-2xl rounded-box place-items-center">
                        <h1 class="card-title underline">NoSQL: non-relational</h1>
                        <p class="text-xl font-medium " > Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges
                            <br />
                            Developed in the late 2000s with a focus on scaling and allowing for rapid application change driven by agile and DevOps practices.
                            <br />
                            are horizontally scalable. are document, key-value,graph or wide-column stores. </p>
                    </div>
                </div>
            </div>

            <div class="p-2 mt-5 mb-10">
                <h1 class="text-center font-bold italic text-2xl mb-5 underline">What is the purpose of JWT and how does it work

                </h1>
                <div class="flex flex-col w-full lg:flex-row">
                    <div class="grid flex-grow p-5 card shadow-2xl rounded-box place-items-center">
                        <h1 class="card-title underline">Purpose of JWT</h1>
                        <p class="text-xl font-medium " >JSON Web Tokens are the new fancy kids around the block when it comes to transporting proofs of identity within an untrusted environment like the Web.
                            <br />
                            A JWT is a mechanism to verify the owner of some JSON data. It's an encoded, URL-safe string that can contain an unlimited amount of data (unlike a cookie) and is cryptographically signed. When a server receives a JWT, it can guarantee the data it contains can be trusted because it's signed by the source</p>
                    </div>
                    <div class="divider lg:divider-horizontal"></div>
                    <div class="grid flex-grow p-5 card shadow-2xl rounded-box place-items-center">
                        <h1 class="card-title underline">How does it work</h1>
                        <p class="text-xl font-medium " > JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                            <br />
                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
