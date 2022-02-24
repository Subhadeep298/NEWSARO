import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const WebViewComponent = ({ route }) => {
  const cat = route.params;
  var category = JSON.stringify(cat.url);
  category = category.replace(/\"/g, "");

  return (
    <>
      <WebView source={{ uri: `${category}` }} />
    </>
  );
};

export default WebViewComponent;

const styles = StyleSheet.create({});
