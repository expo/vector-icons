import React, { ComponentClass } from 'react';
import { GlyphMap, IconButtonProps, IconProps } from './createIconSet';
declare type FontStyle<G extends string> = {
    fontFamily: string;
    fontFile: any;
    glyphMap: GlyphMap<G>;
    fontStyle: any;
};
declare type FontStyles<G extends string> = {
    [key: string]: FontStyle<G>;
};
export declare type MultiStyleIcon<G extends string, FS extends FontStyles<G> = FontStyles<G>> = {
    defaultProps: any;
    Button: ComponentClass<IconButtonProps<G>>;
    getRawGlyphMap: () => GlyphMap<G>;
    getFontFamily: () => string;
    new (props: IconProps<G> & Partial<Record<keyof FS, boolean>>): React.Component<IconProps<G>>;
};
export default function createMultiStyleIconSet<G extends string, FS extends FontStyles<G> = FontStyles<G>>(styles: FS, optionsInput?: {}): MultiStyleIcon<G, FS>;
export {};
