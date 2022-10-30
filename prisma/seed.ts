import { category } from './seeds/category'
import { user } from './seeds/user'
import { article } from './seeds/article'

async function run() {
    user()
    await category()
    article()
}

run()
