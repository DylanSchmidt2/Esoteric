import React from 'react';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import {Routes, Route } from 'react-router-dom'
import Header from  './components/Header/Header'
import Home from './pages/Post'
import Login from  './pages/Login'
import Register from './pages/Register'
import Landing from './pages/Landing';


const fakeUser = true;

// Construct main gql API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

//Construct request middleware that will attach the JWT token to every request header.
const authLink = setContext((_, { headers }) => {
  // get the authentication token form local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  // set up client to execute the 'authLink
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  });

function App() {
  return (
   <ApolloProvider client={client}>
    
      <Header 
      props={ fakeUser }/>
        <Routes>
          <Route
            path="/"
            element ={<Landing />}
          />
          <Route
          path="/Home"
          element={<Home />}
          />
          <Route
            path="/login"
            element ={<Login />}
          />
          <Route
            path="/register"
            element ={<Register />}
          />
       </Routes>
    
   </ApolloProvider>
  );
}

export default App;
