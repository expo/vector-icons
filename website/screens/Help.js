import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useMediaQuery } from "react-responsive";
import PressableOpacity from "../components/PressableOpacity";

const Key = (props) => (
  <Text
    style={{
      fontFamily: "monospace",
      backgroundColor: "#eee",
      borderWidth: 1,
      paddingHorizontal: 2,
      borderColor: "rgba(0,0,0,0.1)",
      borderRadius: 3,
    }}
  >
    {props.children}
  </Text>
);

const Help = ({ navigation }) => {
  let isDesktop = useMediaQuery({ query: "(min-width: 900px)" });

  // useEffect(() => {
  //   new Hotshot({
  //     combos: [
  //       {
  //         key: [66], // back to icon search pressing 'B' key.
  //         callback: () => setTimeout(() => navigation.goBack(), 16),
  //       },
  //     ],
  //   });
  // }, []);

  return (
    <View
      style={[styles.container, { marginHorizontal: isDesktop ? 400 : 10 }]}
    >
      <View style={[styles.instructionView]}>
        <Text style={styles.mainTitle}>Keyboard shortcuts</Text>
      </View>
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.title}>Search screen</Text>

        <Text style={styles.descStyle}>
          - Press <Key>/</Key> to focus the search box.
        </Text>
      </View>

      <View style={{ marginLeft: 20 }}>
        <Text style={styles.title}>Detail Screen</Text>

        <Text style={styles.descStyle}>
          - Press <Key>1</Key> to copy "Import the icon family" code.{`\n`}-
          Press <Key>2</Key> for copy "Render the component" code.{`\n`}- Press{" "}
          <Key>esc</Key> to go back.
        </Text>
      </View>

      <PressableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.button}>Back</Text>
      </PressableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.1)',
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  instructionView: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 25,
    marginTop: 10,
  },
  descStyle: {
    fontSize: 15,
    fontFamily: "monospace",
    marginTop: 18,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  button: {
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#000",
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 20,
  },
});

export default Help;
