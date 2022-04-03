class BlockPositions {
    mainClass: string;
    headBlock: string;
    constructor(scroll: number) {
      this.headBlock = (20 - (scroll < 700 ? scroll * 0.03 : 20)) + '%';
      this.mainClass = this.getMainClass(scroll);
    }
    getMainClass(scroll: number) {
      if (scroll >= 0 && scroll < 700) {
        return 'scroll-01';
      } else if (scroll >= 700 && scroll < 1000) {
        return 'scroll-02';
      } else {
        return '';
      }
    }
  }

export default BlockPositions;