/**
 * Feather icon set component.
 * Usage: <Feather name="icon-name" size={20} color="#4F8EF7" />
 */
declare const iconSet: {
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
        forceUpdate(callback?: (() => void) | undefined): void;
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
        componentDidMount(): Promise<void>;
        componentWillUnmount(): void;
        setNativeProps(props: any): void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
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
export default iconSet;
export declare const Button: any, TabBarItem: any, TabBarItemIOS: any, ToolbarAndroid: any, getImageSource: any, getImageSourceSync: any;
