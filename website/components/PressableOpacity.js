import React, { useCallback } from 'react';
import { Pressable } from 'react-native';

function PressableOpacity({ children, style, activeOpacity = 0.4, ...rest }) {
  const styleWithInteraction = useCallback(
    ({ pressed }) => [{ opacity: pressed ? activeOpacity : 1 }, style],
    [style]
  );

  return (
    <Pressable style={styleWithInteraction} {...rest}>
      {children}
    </Pressable>
  );
}

export default PressableOpacity;
