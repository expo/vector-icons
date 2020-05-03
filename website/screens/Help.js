import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import Hotshot from 'hotshot';

const Help = ({ navigation }) => {
  let isDesktop = useMediaQuery({ query: '(min-width: 900px)' });

  useEffect(() => {
    hotshot;
  }, []);

  const hotshot = new Hotshot({
    combos: [
      {
        keyCodes: [66], // back to icon search pressing 'B' key.
        callback: () => setTimeout(() => navigation.goBack(), 16),
      },
    ],
  });

  return (
    <View
      style={[styles.container, { marginHorizontal: isDesktop ? 400 : 10 }]}>
      <View style={[styles.instructionView]}>
        <Text style={styles.mainTitle}>Guide for keyboard support</Text>
      </View>
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.title}>Search screen</Text>

        <Text style={styles.descStyle}>
          - If search box can't has the focus, you can press '/' key to
          positioning cursor on search box.
        </Text>
      </View>

      <View style={{ marginLeft: 20 }}>
        <Text style={styles.title}>Detail Screen</Text>

        <Text style={styles.descStyle}>
          - Press '1' key for copy "Import the icon family" code.{`\n`}- Press
          '2' key for copy "Render the component" code.{`\n`}- Press 'b' key for
          back to Search screen.
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.button}>BACK (or 'b' key)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  instructionView: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 25,
    marginTop: 10,
  },
  descStyle: {
    fontSize: 15,
    fontFamily: 'monospace',
    marginTop: 18,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  button: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#000',
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 20,
  },
});

export default Help;
