import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import "../styles/nuclear.scss"
import FlagsContainer from '../components/FlagsContainer';
import BlockPositions from '../helpers/BlockPositions';
import AppState from '../interfaces/AppState';
import Dictionary from '../i18n/Dictionary';
import BaseCard from '../components/BaseCard';


function getRandom(max: number){
  return Math.floor(Math.random() * Math.floor(max))
}

export const query  = graphql`
query img {
  bg: file(name: {eq: "bg"}) {
    childImageSharp {
      fluid {
        originalImg
      }
    }
  }
  history1: file(name: {eq: "otto-fritz"}) {
    id
    childImageSharp {
      fixed(height: 150) {
        aspectRatio
        srcWebp
        originalName
      }
    }
    name
  }
}
`;

// markup
const IndexPage = ({data}) => {
  
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
        bgFilter: new BlockPositions(window.pageYOffset).bgFilter,
        headBlock: {
          marginTop: new BlockPositions(window.pageYOffset).headBlock
        },
        history: {
          marginTop: new BlockPositions(window.pageYOffset).history
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
              bgFilter: new BlockPositions(window.pageYOffset).bgFilter,
              headBlock: {
                marginTop: new BlockPositions(window.pageYOffset).headBlock
              },
              history: {
                marginTop: new BlockPositions(window.pageYOffset).history
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
      <img className="bg"  src={data.bg.childImageSharp.fluid.originalImg} placeholder="blurred" alt=" " style={app.scroll.style.bgFilter} />
      <div className="content">
        <div className='title' style={app.scroll.style.headBlock}>
          <h1>{app.pageData.title}</h1>
          <p className="subtitle">{app.pageData.randomQuote}</p>
        </div>
        <div id="history" style={app.scroll.style.history}>
          <BaseCard 
            title='Впервые в мире...' 
            photoPos='photo-left' 
            src={data.history1.childImageSharp.fixed.srcWebp}
            text='Отто Ган и Фриц Штрассман в 1938 году при поиске трансуранов облучали уран нейтронами. (...) Они провели решающий 
            опыт — знаменитое фракционирование радия, бария и мезотория, на основании которого Отто Ган заключил, что ядро урана «лопается», распадаясь на более лёгкие элементы.' 
            comment='https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%BD,_%D0%9E%D1%82%D1%82%D0%BE'></BaseCard>
          <BaseCard 
            title='Впервые в мире...' 
            photoPos='photo-right' 
            src={data.history1.childImageSharp.fixed.srcWebp}
            text='Отто Ган и Фриц Штрассман в 1938 году при поиске трансуранов облучали уран нейтронами. (...) Они провели решающий 
            опыт — знаменитое фракционирование радия, бария и мезотория, на основании которого Отто Ган заключил, что ядро урана «лопается», распадаясь на более лёгкие элементы.' 
            comment='https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%BD,_%D0%9E%D1%82%D1%82%D0%BE'></BaseCard>
        </div>
        
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
