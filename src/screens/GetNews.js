import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import config from "../../config/config";
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

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const GetNews = ({ route, navigation }) => {
  const [news, setNews] = useState([]);

  const cat = route.params;
  var category = JSON.stringify(cat.cat);
  category = category.replace(/\"/g, "");

  useEffect(() => {
    navigation.setOptions({
      title: category,
    });
    fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&country=in&pageSize=50&apiKey=${config.API_KEY}`
    )
      .then((res) => res.json())
      .then((response) => {
        setNews(response.articles);
      })
      .catch((error) => {
        console.log(error);
      });
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
    <View style={{ alignItems: "center", backgroundColor: COLORS.lightGray }}>
      {news.length === 0 ? (
        <ActivityIndicator
          style={{
            height: deviceHeight,
            width: deviceWidth,
            alignItems: "center",
            justifyContent: "center",
          }}
          color={COLORS.black}
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
                      margin: 5,
                      color: COLORS.lightGray,
                      fontFamily: "Roboto_500Medium_Italic",
                      fontSize: 14,
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
  );
};

export default GetNews;

const styles = StyleSheet.create({});
