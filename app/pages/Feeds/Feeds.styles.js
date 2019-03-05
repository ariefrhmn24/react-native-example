import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const trueWidth = (width - 40) / 2;

export default {
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
};
