import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function ContactForm() {
  return (
    <React.Fragment>
      <TextInput
        placeholder="Subject"
        placeholderTextColor="white"
        style={styles.subjectField}
      />
      <TextInput
        multiline={true}
        placeholder="Description"
        placeholderTextColor="white"
        style={styles.descriptionField}
      />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>send</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  subjectField: {
    textAlignVertical: "top",
    backgroundColor: "#3A3D4C",
    borderRadius: 5,
    color: "white",
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  descriptionField: {
    backgroundColor: "#3A3D4C",
    borderRadius: 5,
    color: "white",
    fontSize: 18,
    height: 200,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 40,
    textAlignVertical: "top",
  },
  submitButton: {
    marginTop: 40,
    borderRadius: 5,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6A69EB",
  },
  submitButtonText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 18,
  },
});
