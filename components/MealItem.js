import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";
const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  style,
  textStyle
}) => {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate("MealDetailScreen", {
      mealId: id,
    });
  }

  return (
    <View style={styles.innerContainer}>
      <View style={styles.mealItem}>
        <Pressable
          andriod_ripple={{ color: "#ccc" }}
          onPress={selectMealItemHandler}
        >
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
    </View>
  );
};
export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    margin: 8,
  },
});
