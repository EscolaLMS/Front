import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.escolasoft.EduMamy",
  appName: "EduMamy",
  webDir: "dist",
  backgroundColor: "#FFFFFF",
  server: {
    androidScheme: "https",
  },
  ios: {
    contentInset: "always",
  },
};

export default config;
