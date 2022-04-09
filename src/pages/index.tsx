import "../styles/nuclear.scss"
import 'keen-slider/keen-slider.min.css'

import React, { useEffect, useState, useRef  } from 'react';
import { graphql } from 'gatsby';
import FlagsContainer from '../components/FlagsContainer';
import BlockPositions from '../helpers/BlockPositions';
import {AppState} from '../interfaces/AppState';
import Dictionary from '../i18n/Dictionary';
import BaseHistoryCard from '../components/BaseHistoryCard';
import { useKeenSlider } from 'keen-slider/react'
import BaseWeaponSlide from "../components/BaseWeaponSlide";
import BaseRoundPortrait from "../components/BaseRoundPortrait";

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
  },
  weaponUsa1: file(name: {eq: "b61"}) {
    id
    childImageSharp {
      fixed(height: 150) {
        aspectRatio
        srcWebp
        originalName
      }
    }
    name
  },
  weaponRu: file(name: {eq: "UR100H"}) {
    id
    childImageSharp {
      fixed(height: 150) {
        aspectRatio
        srcWebp
        originalName
      }
    }
    name
  },
  paperBook: file(name: {eq: "PaperBookTexture"}) {
    id
    childImageSharp {
      fixed(height: 600) {
        aspectRatio
        src
        originalName
      }
    }
    name
  },
  killers: allMdx(
    filter: {frontmatter: {tag: {eq: "killers"}}}
    sort: {fields: frontmatter___order}
  ) {
    edges {
      node {
        id
        imgData: frontmatter {
          name
          subtitle
          image {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
      }
    }
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
    scroll: (new BlockPositions(window.pageYOffset)).getScrollProps()
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

  
  const [sliderRef1, instanceRef1] = useKeenSlider<HTMLDivElement>({loop: false, selector: '.slide'})
  const [sliderRef2, instanceRef2] = useKeenSlider<HTMLDivElement>({loop: false, selector: '.slide'})

  useEffect(() => {
      const handleScroll = () => {
        const state = {
          lang: app.lang,
          pageData: app.pageData,
          scroll: (new BlockPositions(window.pageYOffset)).getScrollProps()
        };
        setAppState(state);
        if (state.scroll.weaponSlider.isEnable) {
          //instanceRef1.current?.emit('created');
          instanceRef1.current?.moveToIdx(state.scroll.weaponSlider.number);
          instanceRef2.current?.moveToIdx(state.scroll.weaponSlider.number);
        }
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
    width: '100px',
    zIndex: 2
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
          <BaseHistoryCard
            title='Впервые в мире...' 
            photoPos='photo-left' 
            src={data.history1.childImageSharp.fixed.srcWebp}
            text='Отто Ган и Фриц Штрассман в 1938 году при поиске трансуранов облучали уран нейтронами. (...) Они провели решающий 
            опыт — знаменитое фракционирование радия, бария и мезотория, на основании которого Отто Ган заключил, что ядро урана «лопается», распадаясь на более лёгкие элементы.' 
            comment='https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%BD,_%D0%9E%D1%82%D1%82%D0%BE'></BaseHistoryCard>
          <BaseHistoryCard 
            title='Cоздание атомного оружия в США' 
            photoPos='photo-right' 
            src={data.history1.childImageSharp.fixed.srcWebp}
            text='Отто Ган и Фриц Штрассман в 1938 году при поиске трансуранов облучали уран нейтронами. (...) Они провели решающий 
            опыт — знаменитое фракционирование радия, бария и мезотория, на основании которого Отто Ган заключил, что ядро урана «лопается», распадаясь на более лёгкие элементы.' 
            comment='https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%BD,_%D0%9E%D1%82%D1%82%D0%BE'></BaseHistoryCard>
          <BaseHistoryCard 
            title='Cоздание атомного оружия в СССР' 
            photoPos='photo-left' 
            src={data.history1.childImageSharp.fixed.srcWebp}
            text='Отто Ган и Фриц Штрассман в 1938 году при поиске трансуранов облучали уран нейтронами. (...) Они провели решающий 
            опыт — знаменитое фракционирование радия, бария и мезотория, на основании которого Отто Ган заключил, что ядро урана «лопается», распадаясь на более лёгкие элементы.' 
            comment='https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%BD,_%D0%9E%D1%82%D1%82%D0%BE'></BaseHistoryCard>
          <BaseHistoryCard 
            title='Карибский Кризис' 
            photoPos='photo-right' 
            src={data.history1.childImageSharp.fixed.srcWebp}
            text='Отто Ган и Фриц Штрассман в 1938 году при поиске трансуранов облучали уран нейтронами. (...) Они провели решающий 
            опыт — знаменитое фракционирование радия, бария и мезотория, на основании которого Отто Ган заключил, что ядро урана «лопается», распадаясь на более лёгкие элементы.' 
            comment='https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%BD,_%D0%9E%D1%82%D1%82%D0%BE'></BaseHistoryCard>
          <BaseHistoryCard 
            title='Договор о разоружении' 
            photoPos='photo-left' 
            src={data.history1.childImageSharp.fixed.srcWebp}
            text='Отто Ган и Фриц Штрассман в 1938 году при поиске трансуранов облучали уран нейтронами. (...) Они провели решающий 
            опыт — знаменитое фракционирование радия, бария и мезотория, на основании которого Отто Ган заключил, что ядро урана «лопается», распадаясь на более лёгкие элементы.' 
            comment='https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%BD,_%D0%9E%D1%82%D1%82%D0%BE'></BaseHistoryCard>
          <BaseHistoryCard 
            title='Выход из договора о разоружении ' 
            photoPos='photo-right' 
            src={data.history1.childImageSharp.fixed.srcWebp}
            text='Отто Ган и Фриц Штрассман в 1938 году при поиске трансуранов облучали уран нейтронами. (...) Они провели решающий 
            опыт — знаменитое фракционирование радия, бария и мезотория, на основании которого Отто Ган заключил, что ядро урана «лопается», распадаясь на более лёгкие элементы.' 
            comment='https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%BD,_%D0%9E%D1%82%D1%82%D0%BE'></BaseHistoryCard>
        </div>
        <div id="weapons-head" style={app.scroll.weaponSlider.styleHead}>
          <h2>Вооружение, существующее на планете в данный момент</h2>
        </div>
        <div id="weapons1" style={app.scroll.weaponSlider.styleW1}>
          <div ref={sliderRef1} className="keen-slider">
            <div className="slide">
              <BaseWeaponSlide img={data.weaponUsa1.childImageSharp.fixed.srcWebp}></BaseWeaponSlide>
            </div>
            <div className="slide">
              <BaseWeaponSlide img={data.weaponUsa1.childImageSharp.fixed.srcWebp}></BaseWeaponSlide>
            </div>
            <div className="slide">
              <BaseWeaponSlide img={data.weaponUsa1.childImageSharp.fixed.srcWebp}></BaseWeaponSlide>
            </div>
            <div className="slide">
              <BaseWeaponSlide img={data.weaponUsa1.childImageSharp.fixed.srcWebp}></BaseWeaponSlide>
            </div>
            <div className="slide">
              <BaseWeaponSlide img={data.weaponUsa1.childImageSharp.fixed.srcWebp}></BaseWeaponSlide>
            </div>
            <div className="slide">
              <BaseWeaponSlide img={data.weaponUsa1.childImageSharp.fixed.srcWebp}></BaseWeaponSlide>
            </div>
          </div>
        </div>
        <div id="weapons2" style={app.scroll.weaponSlider.styleW2}>
          <div ref={sliderRef2} className="keen-slider">
            <div className="slide">
              <BaseWeaponSlide img={data.weaponRu.childImageSharp.fixed.srcWebp}></BaseWeaponSlide>
            </div>
            <div className="slide">
              <BaseWeaponSlide img={data.weaponRu.childImageSharp.fixed.srcWebp}></BaseWeaponSlide>
            </div>
            <div className="slide">
              <BaseWeaponSlide img={data.weaponRu.childImageSharp.fixed.srcWebp}></BaseWeaponSlide>
            </div>
            <div className="slide">
              <BaseWeaponSlide img={data.weaponRu.childImageSharp.fixed.srcWebp}></BaseWeaponSlide>
            </div>
            <div className="slide">
              <BaseWeaponSlide img={data.weaponRu.childImageSharp.fixed.srcWebp}></BaseWeaponSlide>
            </div>
            <div className="slide">
              <BaseWeaponSlide img={data.weaponRu.childImageSharp.fixed.srcWebp}></BaseWeaponSlide>
            </div>
          </div>
        </div>
        <div id="portraits">
          {
            data.killers.edges.map((item) => {
              return <BaseRoundPortrait 
                id={item.node.id} 
                key={item.node.id}
                title={item.node.imgData.name}
                subTitle={item.node.imgData.subtitle}
                img={item.node.imgData.image.childImageSharp.original.src}></BaseRoundPortrait>
            })
          }
        </div>
        
      </div>
      
      <FlagsContainer flags={flags}/>  
      <div style={debug}>{app.scroll.position} </div>
    </main>
  ) 

  /// <BaseHorisontalGallery slideNum={app.scroll.weaponSlider.number} />

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

  /* @todo 3 ? возможно бъединить со слайдерем
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

  /* @todo 6 ? возможно ссылки на объединение
  Советы как спастись в зоне заражения
  Несколько статьей с указанием источников.
  */
}

export default IndexPage
