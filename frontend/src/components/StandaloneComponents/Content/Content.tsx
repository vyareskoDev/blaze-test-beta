import "./Content.css";
import DefaultContainer from "../../DefaultContainer/DefaultContainer";


export default function Content()
{
    return (
        <section className="content">
          <DefaultContainer id="content__info-container">
            <div className='info-container__header'>
              <img className="logo" src="/assets/logo-placeholder.svg"></img>
              <span>УВАГА!</span>
            </div>
            <div className='info-container__content'>
              <p>
                Це тестова <span className='info-container__bolder-text'>БЕТА ВЕРСІЯ</span> застосунку.
                У цій версії відсутня <span className='info-container__bolder-text'>більша частина можливостей</span>,
                що будуть доступні у повноцінній версії, і вона є всього лише демонстрацією можливостей платформи.<br/><br/>
                <span className='margin-top-50px'>Дякую за розуміння.</span>
              </p>
            </div>
            </DefaultContainer>
      </section>
    )
}