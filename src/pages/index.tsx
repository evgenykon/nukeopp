import React, { useEffect } from 'react';


import "../styles/nuclear.scss"

import SunsetImg from "../images/bg.jpg"  

const Quotes = [
  'Всё — близко, всё так близко одно от другого. Мы здесь живём настолько тесно, что мир просто необходим, иначе всё полетит к чертям! Один пожар способен уничтожить всех нас, кто бы и почему бы его ни устроил. (Рэй Брэдбери, «Луг»)',
  'Про атомную войну мы все знаем одинаково. «Ложись ногами к взрыву и ползи на ближайшее кладбище. (Стругацкие, «Второе нашествие марсиан»)',
  'Наша пропаганда не любит признавать ядерную войну самоубийством человечества, но —— непременным торжеством социализма (Солженицын, «На возврате дыхания и сознания»)',
];

function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max))
}

const randomQuote = Quotes[getRandom(Quotes.length - 1)]

const text = {};
// <a href={`${docLink.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}>{docLink.text}</a>

pageOnSroll(event: MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
  console.log(event.currentTarget.tagName); // alerts BUTTON
}

// markup
const IndexPage = () => {
  return (
    <main>
      <img className="bg" src={SunsetImg} alt="bg" width="0" />
      <div className="content">
        <div className="header"></div>
        <h1>Nuclear Opposition</h1>
        <p className="subtitle">{randomQuote}</p>
        <div className="footer"></div>
      </div>
      <div id="gallery on-scroll"></div>
        
    </main>
  ) 
}

useEffect(() => {
  const handler = () => {
    console.log('scroll');
  }
  window.addEventListener('scroll', handler);
  return true;

  return () => {
    window.removeEventListener('scroll', handler);
  }
})



export default IndexPage
