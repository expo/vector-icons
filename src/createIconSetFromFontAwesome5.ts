import { Platform } from 'react-native';
import createMultiStyleIconSet, { MultiStyleIcon } from './createMultiStyleIconSet';
import { GlyphMap } from './createIconSet';

export const FA5Style = {
  regular: 'regular',
  light: 'light',
  solid: 'solid',
  brand: 'brand',
};

export function createFA5IconSet<G extends string, K extends string>(
    glyphMap: GlyphMap<G>,
    metadata: Record<K, G[]>,
    fonts,
    pro = false
): MultiStyleIcon<G> {
  const metadataKeys = Object.keys(metadata);
  const fontFamily = `FontAwesome5${pro ? 'Pro' : 'Free'}`;

  function fallbackFamily(glyph) {
    for (let i = 0; i < metadataKeys.length; i += 1) {
      const family = metadataKeys[i];
      if (metadata[family].indexOf(glyph) !== -1) {
        return family === 'brands' ? 'brand' : family;
      }
    }

    return 'regular';
  }

  function glyphValidator(glyph, style) {
    let family = style === 'brand' ? 'brands' : style;
    family = style === 'sharpSolid' ? 'sharp-solid' : family;
    return family in metadata && metadata[family].indexOf(glyph) !== -1;
  }

  function createFontAwesomeStyle(styleName, fontWeight, family = fontFamily) {
    const fontFile = fonts[styleName];

    return {
      fontFamily: `${family}-${styleName}`,
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

  const brandIcons = createFontAwesomeStyle('Brand', '400');
  const lightIcons = createFontAwesomeStyle('Light', '100');
  const regularIcons = createFontAwesomeStyle('Regular', '400');
  const solidIcons = createFontAwesomeStyle('Solid', '700');
  const Icon = createMultiStyleIconSet<G>(
    {
      brand: brandIcons,
      light: lightIcons,
      regular: regularIcons,
      solid: solidIcons,
    },
    {
      defaultStyle: 'regular',
      fallbackFamily,
      glyphValidator,
    },
  );

  return Icon;
}