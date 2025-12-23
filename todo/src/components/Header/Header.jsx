import './Header.css'

function Header() {
    return (
        <>
            <header className='header-container'>
                <h2 className='banner'>TO DO</h2>
                <button className='settings-btn btn'>
                    <span class="material-symbols-outlined settings-icon">
                        settings
                    </span>
                </button>
            </header>
        </>
    )
}

export default Header