import { MultiStyleIcon } from './createMultiStyleIconSet';
import { GlyphMap } from './createIconSet';
export declare const FA6Style: {
    regular: string;
    light: string;
    solid: string;
    brand: string;
    sharpLight: string;
    sharp: string;
    sharpSolid: string;
    duotone: string;
    thin: string;
};
export declare function createFA6IconSet<G extends string, K extends string>(glyphMap: GlyphMap<G>, metadata: Record<K, G[]>, fonts: any, pro?: boolean): MultiStyleIcon<G, {
    [key: string]: {
        fontFamily: string;
        fontFile: any;
        glyphMap: GlyphMap<G>;
        fontStyle: any;
    };
}>;
