import { CapacitorConfig } from '@capacitor/cli'
import { Storage } from '@capacitor/storage'

const config: CapacitorConfig = {
  appId: 'world.dreamon.conference',
  appName: 'Dream On: Conf',
  webDir: '../../dist/apps/conference-mobile',
  bundledWebRuntime: false,
  plugins: {
    Storage,
  },
}

export default config
