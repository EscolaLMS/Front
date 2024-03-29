import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.escolasoft.EduMamy",
  appName: "EduMamy",
  webDir: "dist",
  backgroundColor: "#FFFFFF",
  server: {
    androidScheme: "https",
    allowNavigation: ["*"],
  },
  ios: {
    // contentInset: "always",
  },
};

export default config;
