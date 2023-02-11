import { useState } from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { SideBar } from "./components/SideBar";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const { user, isAuthenticated, isLoading } = useAuth0();

	return (
		<div className="app">
			<SideBar />
		</div>
	);
}

export default App;
