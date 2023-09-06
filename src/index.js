import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import 'normalize.css';

import { App } from "./marvel/components/app/App";
import MarvelService from "./marvel/services/MarvelService";
import { Form } from "./Fromik project/From";


import { AppCountry } from "./country/AppCountry";



ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>

        {/* <App3/> */}
        {/* <App/> */}
        {/* <Form/> */}
      
        <AppCountry/>
    </BrowserRouter>
  </React.StrictMode>,

  document.querySelector("#root")
);
