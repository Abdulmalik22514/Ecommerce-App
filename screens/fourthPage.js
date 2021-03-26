import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SearchIcon, Subtraction, Addition } from "../assets/svg";
import { CustomItems } from "../components/items";
import { FlowerNames, Header } from "../components/texts";
import { styles } from "./styles";
import { Items, TopNavigation } from "./utils";

export default function SelectPage({ navigation }) {
  const [modalState, setModalState] = useState(false);
  const [value, setValue] = useState(0);
  const [active, setActive] = useState("Flowers");
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header />
      <View style={styles.SearchInput}>
        <TextInput placeholder="Search Here" style={styles.inputSearch} />
        <SearchIcon />
      </View>

      <ScrollView
        contentContainerStyle={styles.topScroll}
        style={styles.topNav}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {TopNavigation.map((item, index) => {
          return (
            <FlowerNames
              key={index}
              title={item.title}
              onPress={() => setActive(item.title)}
              isActive={item.title === active}
            />
          );
        })}
      </ScrollView>

      <ScrollView
        contentContainerStyle={styles.scrolCont}
        style={styles.itemContainer}
      >
        {Items.map((item, index) => {
          return (
            <CustomItems
              key={index}
              icon={item.icon}
              title={item.title}
              blendType={item.blendType}
              money={item.money}
              onPress={() =>
                navigation.navigate("preview", { title: item.title })
              }
              onAdd={() => setModalState(true)}
            />
          );
        })}
      </ScrollView>
      {modalState && (
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <TouchableOpacity
              onPress={() =>
                value >= 0 && value < 10 ? setValue(value + 1) : null
              }
            >
              <Addition width={32} height={32} />
            </TouchableOpacity>

            <Text style={styles.one}>{value}</Text>
            <TouchableOpacity
              onPress={() => (value > 0 ? setValue(value - 1) : null)}
            >
              <Subtraction width={32} height={32} />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.toBag}
              onPress={() => {
                setModalState(false);
                setValue(0);
              }}
            >
              <Text style={styles.addTo}>Add to bag</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
