import React from "react";
import { View, ScrollView } from "react-native";
import generalStyles from "../../components/styles/styles";
import ContactForm from "./components/ContactForm";

export default function ContactUs() {
  return (
    <View style={generalStyles.container}>
      <ScrollView>
        <View style={[generalStyles.contentContainer, { paddingTop: 100 }]}>
          <ContactForm />
        </View>
      </ScrollView>
    </View>
  );
}
