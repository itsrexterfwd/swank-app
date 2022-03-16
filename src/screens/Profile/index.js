import React, { useState } from "react";
import { Text } from "react-native";
import Box from "../../components/Box";
import { FONT_SIZE, SPACING} from "../../styles";
import Base from "../../components/Base";

const ProfileScreen = (props) => {
  const [selected, setSelected] = useState(undefined);
  return (
    <Base footer={false}>
      <Box ai_center jc_center pt={SPACING.large}>
        <Text style={{ fontSize: FONT_SIZE.xxlarge, fontWeight: '500' }}>Profile</Text>
        <Text style={{ fontSize: FONT_SIZE.normal, fontWeight: '500', fontStyle: 'italic' }}>Exclusive Fan Club</Text>
      </Box>
    </Base>
  );
}

export default ProfileScreen;