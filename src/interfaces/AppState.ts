interface ScrollRelationProps {
  position: number,
  class: string,
  style: {
    bgFilter: {
      filter: string
    },
    headBlock: {
      marginTop: string
    },
    history: {
      marginTop: string,
      position: string,
      top: string
    }
  },
  weaponSlider: {
    isEnable: boolean,
    number: number,
    styleHead: {
      opacity: number,
      top: string,
    },
    styleW1: {
      opacity: number,
      top: string,
    }, 
    styleW2: {
      opacity: number,
      top: string,
    }
  },
  portraits: {
    style: {
      opacity: number
    }
  }
}

interface AppState {
  lang: string,
  pageData: {
    title: string,
    randomQuote: string
  },
  scroll: ScrollRelationProps,
  popups: {
    person: {
      style: {
        display: string
      }
    }
  }
}

export {AppState, ScrollRelationProps};