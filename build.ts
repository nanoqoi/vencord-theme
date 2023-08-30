import * as process from 'process'
import { compile } from 'sass'
import { resolve } from 'node:path'
import { existsSync } from 'node:fs'
import { writeFile, mkdir } from 'node:fs/promises'

const OUT_DIR = resolve(__dirname, 'dist')
const IN_FILE = resolve(__dirname, 'src/index.sass')
const OUT_FILE = resolve(OUT_DIR, 'theme.css')

async function main() {
  const result = compile(IN_FILE, {
    sourceMap: false,
    style: 'expanded',
  })

  console.log(`(build) compiled ${result.loadedUrls.length} files`)

  if (!existsSync(OUT_DIR)) {
    await mkdir(OUT_DIR)
  }

  await writeFile(OUT_FILE, result.css)

  console.log('(build) out: dist/theme.css')

  console.log('(build) done!')
  process.exit(0)
}

console.log('(build) compiling...')
main()
