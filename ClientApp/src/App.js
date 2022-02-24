import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import FoodItems from "./components/FoodItems";
import AuthorizeRoute from "./components/api-authorization/AuthorizeRoute";
import ApiAuthorizationRoutes from "./components/api-authorization/ApiAuthorizationRoutes";
import { ApplicationPaths } from "./components/api-authorization/ApiAuthorizationConstants";

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
          <AuthorizeRoute path="/food-items" component={FoodItems} />
          <Route
            path={ApplicationPaths.ApiAuthorizationPrefix}
            component={ApiAuthorizationRoutes}
          />
          <Redirect from="/*" to="/food-items"/>
        </Layout>
      </ApolloProvider>
    );
  }
}
