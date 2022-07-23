import React, { useEffect, useState } from "react"

// import Home from './pages/Home'
// import Login from './pages/Login'
// import Likes from './pages/Likes'
// import Signup from './pages/SignUp'
// import NoMatch from './pages/NoMatch'

import Nav from './components/Nav'

// import {
//   Router,
//   Route,
//   Routes
// } from 'react-router-dom'

import "./App.css"
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client"
// import { setContext } from "@apollo/client/link/context"
// // import SearchPhotos from "./searchPhotos"
// const httpLink = createHttpLink({
//   uri: "/graphql",
// })

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token")
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   }
// })

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// })

// import Likes from './pages/Likes';

import SearchPhotos from '../src/searchPhotos'

function App() {
  return (
    <div className="App">
      <section className="banner">
        <div>
          <h1 className="inspo-header">Inspo.Co</h1>
        </div>

        <div>
          <Nav />
        </div>
      </section>

      <div className="container">
        <SearchPhotos />
      </div>
    </div>
  )
}

export default App

{/* <ApolloProvider client={client}>
     <Router>
         <div>
             <Nav />
             <Routes>
               <Route exact path="/" component={Home} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/signup" component={Signup} />
               <Route exact path= "/likes" component={Likes}/>
               <Route component={NoMatch} />
             </Routes>
         </div>
       </Router>
  </ApolloProvider> */}