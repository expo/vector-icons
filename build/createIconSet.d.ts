import React from "react";
export { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from "./vendor/react-native-vector-icons/lib/create-icon-set";
export default function (glyphMap: any, fontName: any, expoAssetId: any, fontStyle?: any): {
    new (props: Readonly<{}>): {
        _mounted: boolean;
        _icon?: any;
        state: {
            fontIsLoaded: boolean;
        };
        componentDidMount(): Promise<void>;
        componentWillUnmount(): void;
        setNativeProps(props: any): void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: {}, context?: any): {
        _mounted: boolean;
        _icon?: any;
        state: {
            fontIsLoaded: boolean;
        };
        componentDidMount(): Promise<void>;
        componentWillUnmount(): void;
        setNativeProps(props: any): void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    propTypes: any;
    defaultProps: any;
    Button: any;
    glyphMap: any;
    getRawGlyphMap: () => any;
    getFontFamily: () => any;
    loadFont: () => Promise<void>;
    font: {
        [x: number]: any;
    };
    contextType?: React.Context<any> | undefined;
};
