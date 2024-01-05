import {NativeModules} from "react-native";

const NativeIconAPI =
  NativeModules.RNVectorIconsManager || NativeModules.RNVectorIconsModule;

export default function ensureNativeModuleAvailable() {
  if (!NativeIconAPI) {
    throw new Error(
      'The native RNVectorIcons API is not available, did you properly integrate the module? Please verify your autolinking setup and recompile.'
    );
  }
}
