import React, { useEffect, useState } from 'react';
import useScrollPosition from '@react-hook/window-scroll'
import "../styles/nuclear.scss"
import SunsetImg from "../images/bg.jpg"  
import FlagsContainer from '../components/FlagsContainer';
import LangRu from '../components/LangRu';
import LangUs from '../components/LangUs';

function getRandom(max: number){
  return Math.floor(Math.random() * Math.floor(max))
}


interface Appstate {
  lang: string,
  pageData: {
    title: string,
    randomQuote: string
  },
  scroll: {
    position: number,
    class: string,
    style: {
      marginTop: string
    }
  }
}


// markup
const IndexPage = () => {
  

  const [app, setAppState] = useState<Appstate>({
    lang: 'ru',
    pageData: {
      title: LangRu.title,
      randomQuote: LangRu.quotes[getRandom(LangRu.quotes.length - 1)],
    },
    scroll: {
      position: 0,
      class: 'top',
      style: {
        marginTop: '20%'
      }
    }
  });

  const changeLanguage = (code: string) => {
    const dictionary = {
      "ru": LangRu,
      "us": LangUs
    }
  
    type langKeys = keyof typeof dictionary;
    const langDictionaryCode = code as langKeys;

    setAppState({
      lang: code,
      pageData: {
        title: dictionary[langDictionaryCode].title,
        randomQuote: dictionary[langDictionaryCode].quotes[getRandom(dictionary[langDictionaryCode].quotes.length - 1)],
      },
      scroll: app.scroll
    });
  }

  useEffect(() => {
      const handleScroll = () => {
        const position = window.pageYOffset;
        let className = 'scroll-top';
        if (position > 0) {
          className = 'scroll-middle';
        }
        setAppState({
          lang: app.lang,
          pageData: app.pageData,
          scroll: {
            position: position,
            class: className,
            style: {
              marginTop: (20 - (position < 700 ? position * 0.03 : 20)) + '%'
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
  

  return (
    <main className={app.scroll.class}>
      <img className="bg" src={SunsetImg} alt="bg" width="0" />
      <div className="content" style={app.scroll.style}>
        <h1>{app.pageData.title} {app.scroll.position}</h1>
        <p className="subtitle">{app.pageData.randomQuote}</p>
        <div className="footer"></div>
      </div>
      <div id="gallery on-scroll"></div>
      
      <FlagsContainer flags={flags}/>
    </main>
  ) 
}

// useEffect(() => {
//   const handler = () => {
//     console.log('scroll');
//   }
//   window.addEventListener('scroll', handler);

//   return () => {
//     window.removeEventListener('scroll', handler);
//   }
// })



export default IndexPage
