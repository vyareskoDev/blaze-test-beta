import "./Content.css";

export default function Content()
{
    return (
        <section className="content">
          <div className='info-container'>
            <div className='info-container__header'>
              <img className="logo" src="../../../public/assets/logo-placeholder.svg"></img>
              <h3>УВАГА!</h3>
            </div>
            <div className='info-container__content'>
              <p>
                Це тестова <span className='info-container__bolder-text'>БЕТА ВЕРСІЯ</span> застосунку.
                У цій версії відсутня <span className='info-container__bolder-text'>більша частина можливостей</span>,
                що будуть доступні у повноцінній версії, і вона є всього лише демонстрацією можливостей платформи.
                <span className='margin-top-50px'>Дякую за розуміння.</span>
              </p>
            </div>
          </div>
      </section>
    )
}