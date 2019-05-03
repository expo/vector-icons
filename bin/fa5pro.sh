#!/bin/sh

if [ $(npm config get @fortawesome:registry) != "undefined" ]
then
  echo "Found @fortawesome npm configuration. Installing fonts"
  echo "Creating temporary folder"
  TEMP_DIR=$(mktemp -d -t rnvi)
  echo "Created folder $TEMP_DIR"
  pushd ${TEMP_DIR}

  echo "Downloading Font Awesome 5 Pro"

  ARCHIVE=$(npm pack @fortawesome/fontawesome-pro --silent) || { echo "Unable to download fonts. Make sure your @fortawesome scope is configured correctly"; exit 0; }
  tar -xzf ${ARCHIVE}
  mv package pro

  popd

  echo "Copying font files"

  cp ${TEMP_DIR}/pro/webfonts/fa-brands-400.ttf ./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome5_Pro_Brands.ttf
  cp ${TEMP_DIR}/pro/webfonts/fa-light-300.ttf ./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome5_Pro_Light.ttf
  cp ${TEMP_DIR}/pro/webfonts/fa-regular-400.ttf ./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome5_Pro_Regular.ttf
  cp ${TEMP_DIR}/pro/webfonts/fa-solid-900.ttf ./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome5_Pro_Solid.ttf

  echo "Done"
fi
