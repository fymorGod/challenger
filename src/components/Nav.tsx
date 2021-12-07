import { signOut } from "@firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../App";
import { auth } from "../services/firebase";
import '../styles/home.scss';

export function Navbar() {
    const { user } = useContext(AuthContext);

    const logout = async () => {
        await signOut(auth)
    }
    return(
    <div className="navBar">
        <div className="logo-container">
            <span>Challenger</span >
        </div>
        <div className="navBar-links">
            <ul>
                <li><a href="/">Home</a></li>
                <li>{user?.name}</li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    </div>)
}