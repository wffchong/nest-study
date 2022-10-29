import { category } from './seeds/category'
import { user } from './seeds/user'

function run() {
    user()
    category()
}

run()
