import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { useContext } from "react";
import { SpotifyContext } from "../context/SpotifyContext";
import Header from "../components/Home Page/Header";
const HomeScreen = () => {
  const navigation = useNavigation();
  const { token } = useContext(SpotifyContext);
  // ! for header navigation
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      axios("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log("error", error.message);
        });
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="w-full flex-1  bg-black">
      {/* Header */}
      <Header />
    </SafeAreaView>
  );
};

export default HomeScreen;
