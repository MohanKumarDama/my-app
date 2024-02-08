import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  const pressHandler = (item) => {
    navigation.navigate("MealsOver", {
      categoryId: item.id,
    });
  };

  const renderCategoryItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        pressHandler={() => pressHandler(item)}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
