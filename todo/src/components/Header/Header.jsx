import './Header.css'

function Header() {
    return (
        <>
            <header className='header-container'>
                <h2 className='banner'>TO DO</h2>
                <input type="checkbox" id='darkmode-toggle'/>
                <label htmlFor="darkmode-toggle">
                    <span class="material-symbols-outlined sun-icon theme-icon">
                        light_mode
                    </span>
                    <span class="material-symbols-outlined moon-icon theme-icon">
                        dark_mode
                    </span>
                </label>
            </header>
        </>
    )
}

export default Header