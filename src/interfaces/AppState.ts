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
        headBlock: {
          marginTop: string
        }
      }
    }
  }

  export default AppState;