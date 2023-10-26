import { FA5Style } from './createIconSetFromFontAwesome5';
declare const iconSet: {
    new (props: import("./createIconSet").IconProps<string> & Partial<Record<"regular" | "light" | "solid" | "brand", boolean>>): import("react").Component<import("./createIconSet").IconProps<string>, {}, any>;
    defaultProps: any;
    Button: import("react").ComponentClass<import("./createIconSet").IconButtonProps<string>, any>;
    getRawGlyphMap: () => import("./createIconSet").GlyphMap<string>;
    getFontFamily: () => string;
};
export { FA5Style };
export default iconSet;
