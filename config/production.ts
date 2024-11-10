import { IConfig } from "@/common";
import { config } from 'dotenv'

config({ path: '.env.local' })

export default {
    nodeEnv: process.env.NODE_ENV || 'production',
    app: {
        name: process.env.APP_NAME || 'user-service',
        port: Number.parseInt(process.env.APP_PORT || '3001', 10)
    }
} as IConfig