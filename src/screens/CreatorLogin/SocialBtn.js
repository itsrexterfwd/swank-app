import React from 'react';
import { Outlined } from '../../components/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../styles';

export default props => {
  const styles = {
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 80,
    borderColor: COLORS.common.hairline,
  };

  if (props.selected) {
    styles.padding = 0;
    styles.paddingVertical = 5;
    styles.paddingHorizontal = 0;
    styles.borderWidth = 0;
    styles.width = 50;
  }
  return (
    <Outlined style={styles} {...props} >
      <Icon name={props.name} size={25} />
    </Outlined>
  );
}