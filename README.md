# @expo/vector-icons

This library is a compatibility layer around [@oblador/react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) to work with the Expo asset system. If you're using React Native without Expo, you have no need for this library -- carry on! (or maybe [check out Expo](https://expo.io/)).

> 👀: this library does *not* provide access to react-native-vector-icon's `Icon.getImageSource()` function for generating images from icons at runtime ([for context on why, see this issue](https://github.com/expo/vector-icons/issues/26)). If you find yourself needing an icon in the form of an image rather than text, you should generate that image yourself and bundle it with your app.

## Resources

- [@expo/vector-icons directory](https://expo.github.io/vector-icons/) - a searchable list of all included icons.
  ![Screenshot of website](https://raw.githubusercontent.com/expo/vector-icons/master/website-screenshot.png)
- [Expo documentation](https://docs.expo.io/)

## Usage

This library is part of the `expo` package, so if you are using `expo` you can simply use it like so

```tsx
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default class IconExample extends React.Component {
  render() {
    return <Ionicons name="md-checkmark-circle" size={32} color="green" />;
  }
}
```

## Upgrading to FontAwesome5 Pro

In order to you use the FontAwesome 5 Pro icons, you will need to download the Pro fonts.

First you need your FontAwesome npm token which can be obtained by logging into your account and then access the Services tab.

Next, configure @fortawesome scope to use the correct server address and your token, as described [here](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers#installing-pro).

Finally, run `cd node_modules/@expo/vector-icons && npm run fa5pro` to download and install the fonts.

If you already had @fortawesome configured (via an `.npmrc` file or by using `npm config set`) before you installed this package, the fonts will already have been installed.

Use FontAwesome5Pro icons like so

```tsx
import React from 'react';
import { FontAwesome5Pro } from '@expo/vector-icons';

export default class IconExample extends React.Component {
  render() {
    return (
      <FontAwesome5Pro light name="check-square" size={32} color="green" />
    );
  }
}
```

for more usage see [Expo icons documentation](https://docs.expo.io/versions/latest/guides/icons/)
