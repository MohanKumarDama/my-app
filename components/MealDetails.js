import { View, Text, StyleSheet } from "react-native";

function MealDetails(props) {
  const { duration, complexity, affordability,style,textStyle } = props;

  return (
    <View style={[styles.details,style]}>
      <Text style={[styles.detailItem,textStyle]}>{duration}</Text>
      <Text style={[styles.detailItem,textStyle]}>{complexity}</Text>
      <Text style={[styles.detailItem,textStyle]}>{affordability}</Text>
    </View>
  );
}

export default MealDetails;
const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color:'#fff'
  },
});
