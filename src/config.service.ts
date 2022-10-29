import { devConfig } from './config/development.config'
import { productionConfig } from './config/production.config'
import path from 'path'
import { config } from 'dotenv'

// 读取 .env 到 process.env 环境变量中
config({ path: path.join(__dirname, '../.env') })

export const ConfigService = {
    provide: 'ConfigService',
    useFactory() {
        return process.env.NODE_ENV === 'development' ? devConfig : productionConfig
    }
}
