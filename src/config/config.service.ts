import { Injectable } from '@nestjs/common'
import { readdirSync } from 'fs'
import path from 'path'

@Injectable()
export class ConfigService {
    config = {} as any
    constructor() {
        const config = { path: path.resolve(__dirname, '../configure') }
        readdirSync(config.path).map(async (file) => {
            if (file.slice(-2) === 'js') {
                const module = await import(path.resolve(config.path, file))
                this.config = { ...this.config, ...module.default() }
            }
        })
    }

    get(path: string) {
        // return this.config.app.name
        console.log(this.config)
        console.log(path)
        return path.split('.').reduce((config, name) => config[name], this.config)
    }
}
