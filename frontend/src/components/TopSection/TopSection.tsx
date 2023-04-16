import "./TopSection.css";
import DefaultButton from '../DefaultButton/DefaultButton';
import BorderedButton from '../BorderedButton/BorderedButton';


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
                    <DefaultButton>Створити</DefaultButton>
                    <BorderedButton>Пройти</BorderedButton>
                </div>
            </div>
        </section>
    )
}