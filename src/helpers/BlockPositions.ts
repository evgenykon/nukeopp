interface CssFilter {
  filter: string
}
interface FilterProps {
  grayscale: number;
  brightness: number;
  contrast: number;
  blur: number;
  sepia: number;
}

class BlockPositions {
    mainClass: string;
    headBlock: string;
    bgFilter: {
      filter: string
    };
    history: string;
    constructor(scroll: number) {
      this.mainClass = this.getMainClass(scroll);
      this.bgFilter = this.getBgFilter(scroll);
      this.headBlock = (20 - (scroll < 700 ? scroll * 0.024 : 17)) + '%';
      this.history = (60 - (scroll < 700 ? scroll * 0.08 : 60)) + '%';
    }
    getMainClass(scroll: number) {
      if (scroll >= 0 && scroll < 700) {
        return 'scroll-01';
      } else if (scroll >= 700 && scroll < 800) {
        return 'scroll-02';
      } else if (scroll >= 800 && scroll < 1000) {
        return 'scroll-03';
      } else {
        return '';
      }
    }
    getBgFilter(scroll: number): CssFilter {
      const x: FilterProps = {
        grayscale: 100,
        brightness: 200,
        contrast: 0,
        blur: 0,
        sepia: 0
      }
      /*if (scroll>0 && scroll<10000) {
        x.grayscale = 100 - (scroll * 0.01);
      }*/
      x.brightness = (scroll * 0.01) + 200;
      x.sepia = (scroll * 0.01) ;
      return {filter: `grayscale(${x.grayscale}%) brightness(${x.brightness}%) sepia(${x.sepia}%)`};
    }
  }

export default BlockPositions;