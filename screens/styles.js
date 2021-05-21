import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  addTo: {
    fontWeight: "bold",
    color: "white",
  },
  one: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 15,
    marginTop: 15,
  },
  toBag: {
    width: 130,
    backgroundColor: "#81AA66",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  modalBox: {
    position: "absolute",
    backgroundColor: "white",
    height: 250,
    width: 150,
    borderRadius: 4,
    top: 100,
    alignItems: "center",
    paddingVertical: 30,
  },
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.4)",
    alignItems: "center",
  },
  topScroll: {
    justifyContent: "space-between",
    flexDirection: "row",
    // width: 400,
    // height: 30,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  scrolCont: {
    paddingBottom: 40,
  },
  itemContainer: {
    backgroundColor: "grey",
    paddingHorizontal: 20,
  },
  green: {
    width: 90,
    height: 3,
    backgroundColor: "green",
  },
  topNav: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  SearchInput: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 10,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#999999",
  },
  inputSearch: {
    width: "90%",
    paddingHorizontal: 15,
  },

  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5,
  },
  icons: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  man: {
    width: 35,
    height: 35,
  },
});
