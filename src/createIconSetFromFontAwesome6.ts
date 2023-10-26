import { Platform } from 'react-native';
import createMultiStyleIconSet from './createMultiStyleIconSet';
import { GlyphMap } from './createIconSet';

export const FA6Style = {
  regular: 'regular',
  light: 'light',
  solid: 'solid',
  brand: 'brand',
  sharpLight: 'light',
  sharp: 'regular',
  sharpSolid: 'solid',
  duotone: 'duotone',
  thin: 'light',
};

export function createFA6IconSet<G extends string, K extends string>(
    glyphMap: GlyphMap<G>,
    metadata: Record<K, G[]>,
    fonts,
    pro = false
) {
  const metadataKeys = Object.keys(metadata);
  const fontFamily = `FontAwesome6${pro ? 'Pro' : 'Free'}`;

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

  function createFontAwesomeStyle(style, fontWeight, family = fontFamily) {
    let styleName = style;
    const fontFile = fonts[styleName];

    if (styleName === 'Brands') {
      styleName = 'Regular';
    }

    if (styleName === 'Duotone') {
      styleName = 'Solid';
    }
    styleName = styleName.replace('Sharp_', '');

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
  const sharpLightIcons = createFontAwesomeStyle(
    'Sharp_Light',
    '300',
    `${fontFamily}Sharp`
  );
  const sharpIcons = createFontAwesomeStyle(
    'Sharp_Regular',
    '400',
    `${fontFamily}Sharp`
  );
  const sharpSolidIcons = createFontAwesomeStyle(
    'Sharp_Solid',
    '900',
    `${fontFamily}Sharp`
  );
  const duotoneIcons = createFontAwesomeStyle(
    'Duotone',
    '900',
    `${fontFamily}Duotone`
  );
  const thinIcons = createFontAwesomeStyle('Thin', '100', `${fontFamily}Thin`);
  const Icon = createMultiStyleIconSet(
    {
      brand: brandIcons,
      light: lightIcons,
      regular: regularIcons,
      solid: solidIcons,
      sharpLight: sharpLightIcons,
      sharp: sharpIcons,
      sharpSolid: sharpSolidIcons,
      duotone: duotoneIcons,
      thin: thinIcons,
    },
    {
      defaultStyle: 'regular',
      fallbackFamily,
      glyphValidator,
    },
  );

  return Icon;
}