#!/bin/sh

echo "Setting up npm config"

if [ $(npm config get @fortawesome:registry) = "undefined" ]
then
  npm config set "@fortawesome:registry" https://npm.fontawesome.com/
fi

echo "Please enter your FontAwesome5 npm token:"
read fa5_token
npm config set "//npm.fontawesome.com/:_authToken" ${fa5_token}

echo "Creating temporary folder"

TEMP_DIR=$(mktemp -d -t rnvi)
echo "Created folder $TEMP_DIR"
pushd ${TEMP_DIR}

echo "Downloading FontAwesome5 Pro"

ARCHIVE=$(npm pack @fortawesome/fontawesome-pro)
tar -xzf ${ARCHIVE}
mv package pro

popd

echo "Copying font files"

cp ${TEMP_DIR}/pro/webfonts/fa-brands-400.ttf ./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome5_Pro_Brands.ttf
cp ${TEMP_DIR}/pro/webfonts/fa-light-300.ttf ./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome5_Pro_Light.ttf
cp ${TEMP_DIR}/pro/webfonts/fa-regular-400.ttf ./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome5_Pro_Regular.ttf
cp ${TEMP_DIR}/pro/webfonts/fa-solid-900.ttf ./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome5_Pro_Solid.ttf

echo "Done"
