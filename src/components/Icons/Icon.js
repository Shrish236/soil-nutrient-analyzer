import SvgMain from 'react-svg-main';
const iconsSet = {home: '<Svg width="200" height="60"><Rect x="25" y="5" width="150"  height="50" fill="rgb(0,0,255)" /></Svg>'};
const synonyms = {house: 'home'};

export default class Icon extends SvgMain {
  constructor(props) {
    super(props);
    this.iconsSet = iconsSet;
    this.synonyms = synonyms;
  }
}