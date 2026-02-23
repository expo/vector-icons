import { Platform } from 'react-native';
import createMultiStyleIconSet from './create-multi-style-icon-set';

const PhosphorStyle = {
  regular: 'regular',
  light: 'light',
  fill: 'fill',
  duotone: 'duotone',
  bold: 'bold',
  thin: 'thin',
};

const fontFamily = 'Phosphor';

function createPhosphorIconSet(glyphMap) {
  function createPhosphorStyle(styleName, fontWeight) {
    const fontFile = `${fontFamily}-${styleName}.ttf`;

    return {
      fontFamily: `${fontFamily}-${styleName}`,
      fontFile,
      fontStyle: Platform.select({
        ios: {
          fontWeight,
        },
        default: {},
      }),
      glyphMap,
    };
  }
 
  const thinIcons = createPhosphorStyle('Thin', '100');
  const lightIcons = createPhosphorStyle('Light', '300');
  const regularIcons = createPhosphorStyle('Regular', '400');
  const boldIcons = createPhosphorStyle('Bold', '600');
  const fillIcons = createPhosphorStyle('Fill', '800');
  const duotoneIcons = createPhosphorStyle('Duotone', '900');
  const Icon = createMultiStyleIconSet(
    {
      light: lightIcons,
      regular: regularIcons,
      bold: boldIcons,
      fill: fillIcons,
      duotone: duotoneIcons,
      thin: thinIcons,
    },
    {
      defaultStyle: 'regular',
    }
  );

  return Icon;
}

export { createPhosphorIconSet, PhosphorStyle };
