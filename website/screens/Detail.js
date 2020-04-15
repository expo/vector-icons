import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Clipboard,
} from 'react-native';
import Icon from '../components/Icon';
import FamilyImport from '../components/FamilyImport';
import UseComponent from '../components/UseComponent';
import { useMediaQuery } from 'react-responsive';

const Detail = ({ route, navigation }) => {
  const { family, name } = route.params;

  let isDesktop = useMediaQuery({ query: '(min-width: 900px)' });

  const handleCopyImport = () => {
    Clipboard.setString(`import { ${family} } from '@expo/vector-icons';`);
  };

  const handleCopyUse = () => {
    Clipboard.setString(`<${family} name="${name}" size={24} color="black" />`);
  };

  return (
    <View
      style={[styles.container, { marginHorizontal: isDesktop ? 200 : 10 }]}>
      <View style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Text style={{ fontSize: 30 }}>{name}</Text>

          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Icon family={family} name={name} size={40} />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            marginTop: 15,
            marginBottom: 15,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={styles.title}>1. Import the icon family</Text>

              <TouchableOpacity
                onPress={handleCopyImport}
                style={{ alignSelf: 'center' }}>
                <Text style={styles.copy}>copy</Text>
              </TouchableOpacity>
            </View>

            <FamilyImport family={family} />
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 20,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.title}>2. Render the component</Text>
              <TouchableOpacity
                onPress={handleCopyUse}
                style={{ alignSelf: 'center' }}>
                <Text style={styles.copy}>copy</Text>
              </TouchableOpacity>
            </View>

            <UseComponent family={family} name={name} />
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.button}>BACK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#7B1FA2',
    backgroundColor: 'rgba(243, 229, 245,0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  copy: {
    marginLeft: 10,
    fontWeight: '400',
    fontSize: 14,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#7B1FA2',
  },
  button: {
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#7B1FA2',
    fontWeight: '600',
  },
});

export default Detail;
