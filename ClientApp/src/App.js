import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Layout } from "./components/Layout";
import FoodItems from "./components/FoodItems";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <ApolloProvider
        client={
          new ApolloClient({
            uri: "https://localhost:5001/graphql",
            cache: new InMemoryCache(),
          })
        }
      >
        <Layout>
          <Route path="/food-items" component={FoodItems} />
          <Redirect from="/*" to="/food-items" />
        </Layout>
      </ApolloProvider>
    );
  }
}
