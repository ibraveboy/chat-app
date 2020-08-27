const { StyleSheet } = require("react-native");

const generalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212330",
  },
  contentContainer: {
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 50,
  },
  containerCentered:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
    marginVertical: 40,
  },
  formContainer: {
    marginTop: 10,
  },
  formControl: {
    marginBottom: 30,
    borderBottomColor: "#3a3e4a",
    borderBottomWidth: 2,
    paddingBottom: 15,
    flexDirection: "row",
  },
  noBorder: {
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  formInput: {
    color: "white",
    fontSize: 20,
    flex: 1,
  },
  multilineInput: {
    minHeight: 80,
  },
  formIconContainer: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  formButton: {
    paddingVertical: 15,
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6583f6",
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  linkText: {
    paddingLeft: 10,
    fontSize: 18,
    color: "#5258b0",
  },
  footerContainer: {
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingBottom: 30,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default generalStyles;
