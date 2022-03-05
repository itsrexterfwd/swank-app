import React from 'react';

import {
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Box from './Box';

export default ({ LeftIcon, RightIcon, loading = false, ...props }) => {
  return (
    <View style={styles.root}>
      {!!LeftIcon && <Box ai_center jc_center style={styles.left_icon}><LeftIcon /></Box>}
      <View style={styles.input_container}><TextInput {...props} style={[styles.input, props.style]} /></View>
      {!loading && !!RightIcon && <Box ai_center jc_center style={styles.right_icon}><RightIcon /></Box>}
      {!!loading && <Box ai_center jc_center style={styles.right_icon}>{<ActivityIndicator animating size="small" />}</Box>}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderWidth: .8,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,.17)',
    width: '100%',
    flexDirection: 'row',
  },
  input_container: {
    flex: 1
  },
  input: {
    paddingVertical: 10,
    paddingLeft: 10,
  },
  left_icon: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 40,
    borderWidth: 1,
  },
  right_icon: {
    minWidth: 40,
    paddingHorizontal: 10,
  },
})