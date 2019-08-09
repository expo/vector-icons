export default function (config: any, expoFontName: any, expoAssetId: any): {
    new (props: Readonly<{}>): {
        _mounted: boolean;
        _icon?: any;
        state: {
            fontIsLoaded: boolean;
        };
        componentWillMount(): Promise<void>;
        componentWillUnmount(): void;
        setNativeProps(props: any): void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
    };
    new (props: {}, context?: any): {
        _mounted: boolean;
        _icon?: any;
        state: {
            fontIsLoaded: boolean;
        };
        componentWillMount(): Promise<void>;
        componentWillUnmount(): void;
        setNativeProps(props: any): void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{}> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        refs: {
            [key: string]: import("react").ReactInstance;
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
    contextType?: import("react").Context<any> | undefined;
};
