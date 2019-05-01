# @expo/vector-icons

This library is a compatibility layer around
[@oblador/react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
to work with the Expo asset system. If you're using React Native
without Expo, you have no need for this library -- carry on! (or
maybe [check out Expo](https://expo.io/)).

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

Run `./node_modules/@expo/vector-icons/bin/fa5pro.sh` and enter the token when asked to in order to upgrade to the Pro version.

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
