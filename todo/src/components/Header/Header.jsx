import './Header.css'
import { useState, useEffect } from "react";

function Header() {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }

    return (
        <>
            <header className='header-container'>
                <h2 className='banner'>TO DO</h2>
                <input
                    type="checkbox"
                    id="darkmode-toggle"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                />
                <label htmlFor="darkmode-toggle">
                    <span className="material-symbols-outlined sun-icon theme-icon">
                        light_mode
                    </span>
                    <span className="material-symbols-outlined moon-icon theme-icon">
                        dark_mode
                    </span>
                </label>
            </header>
        </>
    )
}

export default Header