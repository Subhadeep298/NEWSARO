import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../constants";
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import { useFonts } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

const categories = [
  "Entertainment",
  "Business",
  "Science",
  "Health",
  "Technology",
  "Sports",
  "General",
];

const Categories = ({ navigation }) => {
  let [fontLoaded, error] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("GetNews", {
                cat: category,
              })
            }
          >
            <View>
              <Text style={styles.eachCategory}>{category}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({
  eachCategory: {
    color: COLORS.lightGray,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: COLORS.black,
    fontSize: 19,
    fontFamily: "Roboto_400Regular",
    margin: 10,
    borderRadius: 10,
  },
});
