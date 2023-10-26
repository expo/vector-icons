import { MultiStyleIcon } from './createMultiStyleIconSet';
import { GlyphMap } from './createIconSet';
export declare const FA5Style: {
    regular: string;
    light: string;
    solid: string;
    brand: string;
};
export declare function createFA5IconSet<G extends string, K extends string>(glyphMap: GlyphMap<G>, metadata: Record<K, G[]>, fonts: any, pro?: boolean): MultiStyleIcon<G>;
