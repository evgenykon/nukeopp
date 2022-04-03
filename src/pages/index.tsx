import React, { useEffect, useState } from 'react';
import "../styles/nuclear.scss"
import FlagsContainer from '../components/FlagsContainer';
import BlockPositions from '../helpers/BlockPositions';
import AppState from '../interfaces/AppState';
import Dictionary from '../i18n/Dictionary';
import BaseCard from '../components/BaseCard';

const ImageLib = {
  SunsetMoscow: "../images/bg.jpg"
}


function getRandom(max: number){
  return Math.floor(Math.random() * Math.floor(max))
}

// markup
const IndexPage = () => {
  
  const [app, setAppState] = useState<AppState>({
    lang: 'ru',
    pageData: {
      title: Dictionary.ru.title,
      randomQuote: Dictionary.ru.quotes[getRandom(Dictionary.ru.quotes.length - 1)],
    },
    scroll: {
      position: 0,
      class: new BlockPositions(window.pageYOffset).mainClass,
      style: {
        headBlock: {
          marginTop: new BlockPositions(window.pageYOffset).headBlock
        }
      }
    }
  });

  const changeLanguage = (code: string) => {
    
  
    type langKeys = keyof typeof Dictionary;
    const langDictionaryCode = code as langKeys;

    setAppState({
      lang: code,
      pageData: {
        title: Dictionary[langDictionaryCode].title,
        randomQuote: Dictionary[langDictionaryCode].quotes[getRandom(Dictionary[langDictionaryCode].quotes.length - 1)],
      },
      scroll: app.scroll
    });
  }

  useEffect(() => {
      const handleScroll = () => {
        setAppState({
          lang: app.lang,
          pageData: app.pageData,
          scroll: {
            position: window.pageYOffset,
            class: new BlockPositions(window.pageYOffset).mainClass,
            style: {
              headBlock: {
                marginTop: new BlockPositions(window.pageYOffset).headBlock
              }
            }
          }
        });
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, []
  )
  
  const onSelectFlag = (code: string) => {
    changeLanguage(code);
  }
  
  const flags = [
    {code: 'us', src: "https://flagicons.lipis.dev/flags/4x3/um.svg", onClick: onSelectFlag, isActive: false},
    {code: 'ru', src: "https://flagicons.lipis.dev/flags/4x3/ru.svg", onClick: onSelectFlag, isActive: true}
  ];
  
  const debug = {
    position: 'fixed',
    top:0,
    right: 0,
    width: '100px'
  }

  return (
    <main className={app.scroll.class}>
      <img className="bg" src={require("../images/bg.jpg")} alt="bg" width="0" />
      <div className="content" style={app.scroll.style.headBlock}>
        <h1>{app.pageData.title}</h1>
        <p className="subtitle">{app.pageData.randomQuote}</p>
        <BaseCard 
          title='Впервые в мире...' 
          photoPos='photo-left' 
          src='../images/history/otto-fritz.jpg' 
          text='Отто Ган и Фриц Штрассман в 1938 году при поиске трансуранов облучали уран нейтронами. (...) 17 декабря 1938 года они провели решающий 
          опыт — знаменитое фракционирование радия, бария и мезотория, на основании которого Отто Ган заключил, что ядро урана «лопается», распадаясь на более лёгкие элементы.' 
          comment='sdf'></BaseCard>
      </div>
      <FlagsContainer flags={flags}/>  
      <div style={debug}>{app.scroll.position} </div>
    </main>
  ) 

  /* @todo 1
  История:
    - открытие ядерного распада
    - создание атомного оружия (США, СССР)
    - первые испытания (США, СССР)
    - Карибский кризис
    - договор о разоружении
    - выход из договора о разоружении 
  Нужно сделать в виде вертикального таймлайна в центре с датами, по обеим сторонам фотографии, описание и комментарии
  */

  /* @todo 2
  Вооружение на данный момент, существующее на планете
  Несколько горизонтальных галлерей с карточками. 1 галлерея = 1 страна. На карточках любая доступная информация (и источник)
  */

  /* @todo 3
  Оценка поражения выбранным типом оружия
  Карта гугл, пользовтаель может указать эпицентр, отобразится зона поражения, заражения, ударной волны
  */

  /* @todo 4
  Перечень лиц, имеющих доступ к активации оружия
  Несколько горизонтальных галлерей с фотографиями, фамилиями и должностями
  */

  /* @todo 5
  Оценка уровня опасности наступления ядерной войны.
  Плитка из блоков, содержащих скриншоты цитат с разных сайтов.
  */

  /* @todo 6
  Советы как спастись в зоне заражения
  Несколько статьей с указанием источников.
  */
}

export default IndexPage
