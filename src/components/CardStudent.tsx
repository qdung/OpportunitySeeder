import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors} from 'theme';
import {scaleWidth} from 'utils/responsive';

export const CardStudent = () => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.5}
      onPress={() => null}>
      <View style={styles.row1}>
        <Text>asdasd</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: scaleWidth(90),
    height: 90,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.blue_primary,
  },
  row1: {},
});
