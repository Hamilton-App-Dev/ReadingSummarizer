import React from "react";
import ReactDOM from "react-dom/client";
import * as dotenv from "dotenv";
// dotenv.config();
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<Auth0Provider
		domain="dev-ifkribvcg5hqjyhd.us.auth0.com"
		clientId="BEsy4is3QvOvNsa0CVnzULglN4vfo612"
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}
	>
		<App />
	</Auth0Provider>
);
