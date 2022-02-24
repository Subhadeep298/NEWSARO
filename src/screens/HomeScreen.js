import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import config from "../../config/config";
import { COLORS, SIZES } from "../../constants";
import Categories from "../components/Categories";
import TrendingNews from "../components/TrendingNews";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
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

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const HomeScreen = ({ navigation }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=25&apiKey=${config.API_KEY}`
    )
      .then((res) => res.json())
      .then((response) => {
        setNews(response.articles);
      })
      .catch((error) => {
        console.log(error);
      });
    setNews([]); // for the unmounted error
  }, []);

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
    <View style={styles.container}>
      <Categories navigation={navigation} />
      <TrendingNews navigation={navigation} />
      <Text
        style={{
          paddingLeft: SIZES.padding - 4,
          fontFamily: "Roboto_300Light_Italic",
          fontSize: 12,
        }}
      >
        Latest NEWS
      </Text>
      <View style={{ flex: 12, alignItems: "center" }}>
        {news.length === 0 ? (
          <ActivityIndicator
            style={{
              height: deviceHeight,
              width: deviceWidth,
              alignItems: "center",
              justifyContent: "center",
            }}
            color={COLORS.lightGray}
            size="large"
          />
        ) : (
          // <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {news.map((news, index) =>
              news.urlToImage ? (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate("WebView", {
                      url: news.url,
                    })
                  }
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: COLORS.black,
                      borderRadius: 10,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.65,

                      elevation: 8,
                      width: deviceWidth - 30,
                      marginVertical: 7,
                    }}
                  >
                    <Image
                      source={{ uri: news.urlToImage }}
                      style={{ height: 100, width: 100, borderRadius: 10 }}
                    />
                    <Text
                      style={{
                        width: deviceWidth - 130,
                        paddingLeft: 10,
                        paddingTop: 5,
                        color: COLORS.lightGray,
                        fontFamily: "Roboto_500Medium_Italic",
                        fontSize: 15,
                      }}
                    >
                      {news.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : null
            )}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.lightGray },
});

export default HomeScreen;
