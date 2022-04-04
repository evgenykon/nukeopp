interface AppState {
    lang: string,
    pageData: {
      title: string,
      randomQuote: string
    },
    scroll: {
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
      }
    }
  }

  export default AppState;