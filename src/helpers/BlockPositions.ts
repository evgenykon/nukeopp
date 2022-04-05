import { ScrollRelationProps } from "../interfaces/AppState";

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
interface HistoryProps {
  marginTop: number,
  position: string,
  top: number
}


class BlockPositions {
    position: number;
    mainClass: string;
    headBlock: string;
    bgFilter: {
      filter: string
    };
    history: {
      marginTop: string,
      position: string,
      top: string
    };
    weaponSlider: {
      number: number
    };
    constructor(scroll: number) {
      this.position = scroll;
      this.mainClass = this.getMainClass(scroll);
      this.bgFilter = this.getBgFilter(scroll);
      this.headBlock = (20 - (scroll < 700 ? scroll * 0.024 : 19)) + '%';
      this.history = this.getHistoryPosition(scroll)
      this.weaponSlider = this.getWeaponSlider(scroll)
    };
    getScrollProps(): ScrollRelationProps {
      return {
        position: this.position,
        class: this.mainClass,
        style: {
          bgFilter: this.bgFilter,
          headBlock: {
            marginTop: this.headBlock
          },
          history: this.history
        },
        weaponSlider: this.weaponSlider
      }
    };
    getMainClass(scroll: number) {
      if (scroll >= 0 && scroll < 100) {
        return 'scroll-01';
      } else if (scroll >= 100 && scroll < 800) {
        return 'scroll-02';
      } else if (scroll >= 800 && scroll < 3300) {
        return 'scroll-03';
      } else if (scroll >= 3300) {
        return 'scroll-04';
      } else {
        return '';
      }
    };
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
      x.brightness = (scroll * 0.1) + 200;
      x.sepia = (scroll * 0.01) ;
      return {filter: `grayscale(${x.grayscale}%) brightness(${x.brightness}%) sepia(${x.sepia}%)`};
    };
    getHistoryPosition(scroll: number) {
      const x: HistoryProps = {
        marginTop: 0,
        position: 'relative',
        top: 0
      }
      if (scroll > 0 && scroll < 800) {
        x.marginTop = 60 - (scroll < 700 ? scroll * 0.08 : 60);
      } else if (scroll >= 800 && scroll < 3300) {
        x.position = 'absolute';
        x.top = (scroll - 940) * -1;
      }
      return {
        marginTop: `${x.marginTop}%`,
        position: `${x.position}`,
        top: `${x.top}px`
      };
    };
    getWeaponSlider(scroll: number) {
      return {
        number: Math.round((scroll - 3300) * 0.005),
        style: {
          top: 0
        }
      }
    };
  }

export default BlockPositions;