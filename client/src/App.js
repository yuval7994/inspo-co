import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import SearchPhotos from "./searchPhotos"
const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});





import "./App.css"
import Nav from './components/Nav';
import Likes from './pages/Likes';


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">React Photo Search</h1>
        <SearchPhotos />
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div>
//             <Nav />
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route exact path="/login" component={Login} />
//               <Route exact path="/signup" component={Signup} />
//               <Route exact path= "/likes" component={Likes}/>
//               <Route component={NoMatch} />
//             </Switch>
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

export default App;
