import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <img
            src="/power.png"
            className="h-6 w-6 cursor-pointer"
            onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
            }
        />
    );
};

export { LogoutButton };
