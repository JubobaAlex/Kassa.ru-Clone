import './style/Header.css'
import'./style/AnimationHeader.css'
export default function Header() {
    return (
        <div>
            <header>
                <div className='header-div'>
                    <h2><a href="/">KASSA.RU</a></h2>
                    <nav className='nav-silka'>
                        <h3><a href='/'>Фильмы</a></h3>
                        <h3><a href='/cinemas'>Кинотеатры</a></h3>
                    </nav>
                    <div className='login'>
                        <h3><a href="">Вход</a></h3>
                        <h3><a href="">Регистрация</a></h3>
                    </div>
                </div>
            </header>
        </div>
    )
}