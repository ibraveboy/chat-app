import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Search from "../../components/Search/Search";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import generalStyles from "../../components/styles/styles";
import AllTab from "./components/AllTab/AllTab";
import GroupTab from "./components/GroupTab/GroupTab";

export default function Chats(props) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "all",
      title: "All",
    },
    {
      key: "group",
      title: "Group",
    },
  ]);
  return (
    <View style={generalStyles.container}>
      <View style={[generalStyles.contentContainer, styles.contentContainer]}>
        <Search />
      </View>
      <View style={generalStyles.container}>
        <ScrollView contentContainerStyle={{ flex: 1, minHeight: 200 }}>
          <TabView
            renderTabBar={(props) => {
              return (
                <TabBar
                  {...props}
                  indicatorStyle={{ backgroundColor: "#5258b0", height: 4 }}
                  style={{ backgroundColor: "#212330" }}
                  labelStyle={{ fontSize: 18 }}
                />
              );
            }}
            navigationState={{ index, routes }}
            renderScene={SceneMap({ all: AllTab, group: GroupTab })}
            onIndexChange={setIndex}
            initialLayout={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});
