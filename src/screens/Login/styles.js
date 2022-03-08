import {
  StyleSheet,
} from 'react-native';
import { COLORS, FONT_SIZE, SPACING } from '../../styles';

export default StyleSheet.create({
  subtitle_container: {
    paddingHorizontal: '10%',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
  form: {
    paddingHorizontal: 20,
  },
  separator_container: {
    flexDirection: 'row',
    width: '100%',
  },
  hairline: {
    height: 1,
    flex: 1,
    backgroundColor: COLORS.common.dark_1,
    opacity: .3,
  },
  separator: {
    padding: 10,
  },
  social_btn_container: {
    flexDirection: 'row',
  },
  social_btn: {
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  social_txt: {
    color: COLORS.common.white,
    fontSize: FONT_SIZE.xsmall,
    fontWeight: '600',
    paddingLeft: 5
  }
})