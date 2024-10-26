import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'WhatsApp',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: "#ffffffff",      
      showSpinner: false,
      androidSpinnerStyle: "small",
      iosSpinnerStyle: "small",     
      splashFullScreen: true,
      splashImmersive: true,
     
    },
  },
};

export default config;
