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
      top: string,
    },
    styleW1: {
      top: string,
    },
    styleW2: {
      top: string,
    },
    styleW3: {
      top: string,
    },
    styleW4: {
      top: string,
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