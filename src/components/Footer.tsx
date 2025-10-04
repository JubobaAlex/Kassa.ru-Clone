import './style/Footer.css'
export default function Footer() {
    return (
        <div>
            <footer>
                
                <div className="footer-content">
                <div>
                    <h3>БИЛЕТЫ:</h3>
                    <span>Условия покупки билетов</span>
                    <span>Возврат билетов</span>
                </div>
                <div>
                    <h3>ДОП. ИНФОРМАЦИЯ:</h3>
                    <span>Условия использования сайта</span>
                    <span>Политика конфиденциальности</span>
                </div>
                <div>
                    <h3>НАШИ КОНТАКТЫ:</h3>
                    <span>тел.: 79700000000</span>
                </div>
                </div>
                <div className='prava'>
                   <h4>© 2025 KASSA.RU. Все права защищены.</h4>
                </div>
                
            </footer>
        </div>
    )
}