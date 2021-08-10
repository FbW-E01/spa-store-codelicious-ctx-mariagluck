import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Theme } from "../contexts/Theme";

export default function Heading() {
    const { user } = useContext(UserContext);
    const { theme, setTheme } = useContext(Theme);

    return (
        <div className="heading">
            <p>
                Welcome, {user.name}, &nbsp;
                <a href="#" onClick={() => { setUser(null) }}>Log out</a>
            </p>
            <hr/>
            <p>Switch theme</p>
            <select onChange={(e) => {  
                setTheme(e.target.value)
             }}>
                <option value="beachWave">Beach Waves</option>
                <option value="night">Night Mode</option>
            </select>
            <hr/>
        </div>
    );
}