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
    number: number,
    style: {
      top: string
    }
  }
}

interface AppState {
  lang: string,
  pageData: {
    title: string,
    randomQuote: string
  },
  scroll: ScrollRelationProps
}

export {AppState, ScrollRelationProps};