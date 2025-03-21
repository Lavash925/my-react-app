import { type RouteConfig, route } from "@react-router/dev/routes";
import { createBrowserRouter, redirect } from "react-router";
import { isAuthenticated } from "./services/auth";
import PrivatePage from "./routes/private";
import * as React from "react";
import * as ReactDOM from "react-dom";




export default [
    route("/", "routes/home.tsx"),
    route("/about", "routes/about.tsx"),
    route("/docs", "routes/docs.tsx"),
    route("/contacts", "routes/contacts.tsx"),
    route("/vacancies", "routes/vacancies.tsx"),
    route("/private", "routes/private.tsx", {
        //loader: checkAuth
    }),
] satisfies RouteConfig;

