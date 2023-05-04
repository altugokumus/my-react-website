import React from 'react'

const Code = () => {
  return (
    <div className='portfolio'>
        <div className="portfolioCard">
            <a target={"_blank"} href={"https://altug-weather-app.netlify.app/"}><img className='portfolioimg' src="weather-app.png" alt="" /></a>
            <p>WeatherApp HTML, CSS, React.js</p>
        </div>
        <div className="portfolioCard">
            <a target={"_blank"} href={"https://altugokumus.github.io/rate-app/"}><img className='portfolioimg' src="rating.png" alt="" /></a>
            <p>Rating component design with HTML, CSS, React.js </p>
        </div>
        <div className="portfolioCard">
            <a target={"_blank"} href={"https://altugokumus.github.io/advice-generator-app/"}><img className='portfolioimg' src="advice.png" alt="" /></a>
            <p>Advice generator design, gives randon advices. HTML, CSS, JS </p>
        </div>
        <div className="portfolioCard">
            <a target={"_blank"} href={"https://altug-drum-kit.netlify.app//"}><img className='portfolioimg' src="drumkit.png" alt="" /></a>
            <p>Play Drum Kit HTML, CSS, JS </p>
        </div>
        <div className="portfolioCard">
            <a target={"_blank"} href={"https://karsilama.netlify.app/"}><img className='portfolioimg' src="karsilama.png" alt="" /></a>
            <p>Greeting page HTML, CSS, JS </p>
        </div>
        <div className="portfolioCard">
            <a target={"_blank"} href={"https://altug-survey-form.netlify.app/"}><img className='portfolioimg' src="surveyform.png" alt="" /></a>
            <p>Responsive four card design section with HTML, CSS </p>
        </div>
        <div className="portfolioCard">
            <a target={"_blank"} href={"https://altugokumus.github.io/four-cards/"}><img className='portfolioimg' src="four-cards.png" alt="" /></a>
            <p>Responsive four card design section with HTML, CSS </p>
        </div>
        <div className="portfolioCard">
            <a target={"_blank"} href={"https://altugokumus.github.io/qr-code-card/"}><img className='portfolioimg' src="qr-card.png" alt="" /></a>
            <p>QR card design HTML, CSS </p>
        </div>
        <div className="portfolioCard">
            <a target={"_blank"} href={"https://altugokumus.github.io/single-price/"}><img className='portfolioimg' src="price-component.png" alt="" /></a>
            <p>Price component design HTML, CSS </p>
        </div>
    </div>
  )
}

export default Code