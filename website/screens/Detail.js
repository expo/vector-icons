import React, { useState } from 'react';
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
import CopyButton from '../components/CopyButton';

const Detail = ({ route, navigation }) => {
  const { family, name } = route.params;
  const [copyColorImp, setCopyColorImp] = useState(false);
  const [copyColorRen, setCopyColorRen] = useState(false);

  let isDesktop = useMediaQuery({ query: '(min-width: 900px)' });

  const handleCopyImport = () => {
    Clipboard.setString(`import { ${family} } from '@expo/vector-icons';`);
    setCopyColorImp(true);
    setCopyColorRen(false);
  };

  const handleCopyUse = () => {
    Clipboard.setString(`<${family} name="${name}" size={24} color="black" />`);
    setCopyColorRen(true);
    setCopyColorImp(false);
  };

  return (
    <View
      style={[styles.container, { marginHorizontal: isDesktop ? 200 : 10 }]}>
      <View style={{ padding: 20 }}>
        <View style={styles.iconName}>
          <Text style={{ fontSize: 30 }}>{name}</Text>

          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <Icon family={family} name={name} size={40} />
          </View>
        </View>

        <View style={styles.viewDesc}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.viewImportDesc}>
              <Text style={styles.title}>1. Import the icon family</Text>
              <CopyButton onPress={handleCopyImport} buttonName="copy" />
            </View>
            <View
              style={[
                styles.copyView,
                {
                  backgroundColor: copyColorImp
                    ? // ? 'rgba(206, 147, 216,0.2)'
                      '#CCCCCC'
                    : null,
                },
              ]}>
              <FamilyImport family={family} />
            </View>
          </View>

          <View style={styles.viewCopyDesc}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.title}>2. Render the component</Text>
              <CopyButton onPress={handleCopyUse} buttonName="copy" />
            </View>

            <View
              style={[
                styles.copyView,
                {
                  backgroundColor: copyColorRen
                    ? // ? 'rgba(206, 147, 216,0.2)'
                      '#CCCCCC'
                    : null,
                },
              ]}>
              <UseComponent family={family} name={name} />
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.button}>BACK</Text>
        </TouchableOpacity>
      </View>

      <View></View>
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
    // backgroundColor: 'rgba(243, 229, 245,0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  button: {
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#000',
    fontWeight: '600',
  },
  iconName: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  viewDesc: {
    flexDirection: 'column',
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewImportDesc: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCopyDesc: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  copyView: {
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

export default Detail;
