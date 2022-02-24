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

const TrendingNews = ({ navigation }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=10&apiKey=${config.API_KEY}`
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
    <View>
      {news.length === 0 ? (
        <ActivityIndicator
          style={{
            height: deviceHeight,
            width: deviceWidth,
            alignItems: "center",
            justifyContent: "center",
          }}
          color="black"
          size="large"
        />
      ) : (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {news.map((news, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("WebView", {
                  url: news.url,
                })
              }
            >
              <View style={{ margin: 10 }}>
                <Image
                  source={{ uri: news.urlToImage }}
                  style={{ height: 200, width: 200, borderRadius: 10 }}
                />
                <Text
                  style={{
                    width: 200,
                    textAlign: "justify",
                    color: COLORS.black,
                    fontFamily: "Roboto_500Medium_Italic",
                    paddingTop: 5,
                  }}
                >
                  {news.title.trim()}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default TrendingNews;

const styles = StyleSheet.create({});
