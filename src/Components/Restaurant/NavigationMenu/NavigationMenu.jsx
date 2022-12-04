import React from "react";
import { Link} from "react-router-dom";
import './NavigationMenu.css'

export function NavegationMenu(){

    return(
        <div>
            <ul className="NavBarMenu">
                <Link to={`./`}>Domino's Pizza</Link>
                <Link to={`./`}>KFC</Link>
                <Link to={`./`}>Burger King</Link>
                <Link to={`./`}>Jeno's Pizza</Link>
                <Link to={`./`}>El corral</Link>
                <Link to={`./`}>Fast food</Link>
            </ul>
        </div>
    );
}