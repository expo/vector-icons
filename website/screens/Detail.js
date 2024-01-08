import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Clipboard,
} from 'react-native';
import Icon from '../components/Icon';
import FamilyImport from '../components/FamilyImport';
import UseComponent from '../components/UseComponent';
import { useMediaQuery } from 'react-responsive';
import CopyButton from '../components/CopyButton';
import Hotshot from 'hotshot';
import PressableOpacity from "../components/PressableOpacity";

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

  useEffect(() => {
    hotshot;
  }, []);

  const hotshot = new Hotshot({
    combos: [
      {
        keyCodes: [27], // back to icon search pressing 'esc' key.
        callback: () => setTimeout(() => navigation.goBack(), 16),
      },
      {
        keyCodes: [49], // copy Import code pressing '1' key.
        callback: () => setTimeout(() => handleCopyImport(), 16),
      },
      {
        keyCodes: [50], // copy Use code pressing '2' key.
        callback: () => setTimeout(() => handleCopyUse(), 16),
      },
    ],
  });

  return (
    <View
      style={[styles.container, { marginHorizontal: isDesktop ? 200 : 10 }]}>
      <View style={{ paddingVertical: 24 }}>
        <View style={styles.iconWrapper}>
          <View style={styles.iconContainer}>
            <Icon family={family} name={name} size={48} />
          </View>
          <Text style={styles.iconName}>{name}</Text>
          <Text style={styles.iconFamilyName}>{family}</Text>
        </View>
        <View style={styles.viewDesc}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={styles.viewImportDesc}>
              <Text style={styles.title}>1. Import the icon family</Text>
              <CopyButton onPress={handleCopyImport} />
            </View>
            <View
              style={[
                styles.copyView,
                {
                  backgroundColor: copyColorImp ? '#ddd' : null,
                },
              ]}>
              <FamilyImport family={family} />
            </View>
          </View>
          <View style={styles.viewCopyDesc}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.title}>2. Render the component</Text>
              <CopyButton onPress={handleCopyUse} />
            </View>
            <View
              style={[
                styles.copyView,
                {
                  backgroundColor: copyColorRen ? '#ddd' : null,
                },
              ]}>
              <UseComponent family={family} name={name} />
            </View>
          </View>
        </View>
        <PressableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.button}>BACK</Text>
        </PressableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    userSelect: 'none',
    marginBottom: 2,
  },
  button: {
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: '#ddd',
    fontWeight: '600',
  },
  iconWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    marginLeft: 10,
    marginBottom: 16,
    width: 96,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e3e3e3',
    backgroundColor: '#fff',
  },
  iconName: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 6,
  },
  iconFamilyName: {
    color: '600',
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
    marginTop: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

export default Detail;
