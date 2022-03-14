import React from 'react';
import {
  Text
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';

import Box from '../../components/Box';

export default props => {
  return (
    <Box flexDirection="row" ai_center jc_center>
      <Box>
        <CheckBox
          value={true}
          onValueChange={(newValue) => {}}
          style={{ width: 20, height: 20 }}
        />
      </Box>
      <Box>
        <Icon name={props.icon} size={32} />
      </Box>
      <Box>
        <Text>{props.name}</Text>
      </Box>
    </Box>
  );
}