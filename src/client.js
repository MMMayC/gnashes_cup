import React from "react"
import {hydrate} from "react-dom"
import {Provider} from "react-redux"
import configureStore from "./redux/configureStore"
import "./style/index.less"
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state)
/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#app")
)
