import * as process from 'process'
import { execa } from 'execa'
import chokidar from 'chokidar'

const doBuild = () =>
  execa('yarn', ['css:generate']).then(() => console.log('   css built...'))

let isChangingSomething = false

console.log('getting started:')
const main = () => {
  doBuild().finally(() => {
    console.log('done!')
    if (process.env.WATCH === '1') {
      console.log('watching for changes...')
      chokidar.watch('./styles/**/*').on('change', (path, stats) => {
        if (isChangingSomething) return
        isChangingSomething = true
        console.log(`"${path}"`, 'has changed:')
        doBuild().then(() => {
          console.log('done! (watching)')
          isChangingSomething = false
        })
      })
    } else {
      process.exit(0)
    }
  })
}

main()
