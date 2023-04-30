import "./TopSection.css";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";


export default function TopSection()
{
    return (
        <section className="top">
            <div className='top__big-labels'>
                <span className="big-labels__title">Новий підхід до тестувань.</span>
                <span className="big-labels__subtitle">Проходження та створення тестувань ще ніколи не було таким зручним.</span>
            </div>
            <div className='actions'>
                <div className='actions__description'>
                    Спробуйте застосунок створивши тест,
                    або пройдіть вже існуючий
                </div>
                <div className='actions__buttons'>
                <Link to="/construct-test">
                    <Button className="default-button button">
                        Створити
                    </Button>
                </Link>
                <Link to="/pass-test">
                    <Button className="bordered-button button">
                        Пройти
                    </Button>
                </Link>
                </div>
            </div>
        </section>
    )
}