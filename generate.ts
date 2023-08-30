import * as process from 'process'
import packageJSON from './package.json'
import { writeFile, appendFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const LATEST_URL =
  'https://raw.githubusercontent.com/Synqat/vencord-theme/main/versions/latest.css'

const CREDITS = {
  name: `${packageJSON.theme.name} (v${packageJSON.version})`,
  author: packageJSON.author,
  version: packageJSON.version,
  description: packageJSON.theme.description,
  source: packageJSON.repository.url,
  website: packageJSON.theme.website,
  invite: packageJSON.theme.invite,
}

const SETTINGS = {
  ['synqats-gb-bg-0-dark']: '#1e2021',
  ['synqats-gb-bg-1-dark']: '#282828',
  ['synqats-gb-bg-2-dark']: '#282828',
  ['synqats-gb-bg-3-dark']: '#3c3836',
  ['synqats-gb-bg-4-dark']: '#3c3836',
  ['synqats-gb-bg-5-dark']: '#504944',
  ['synqats-gb-bg-dim-dark']: '#141617',
  ['synqats-gb-bg-word-dark']: '#32302f',
  ['synqats-gb-bg-diff-green-dark']: '#32361a',
  ['synqats-gb-bg-diff-blue-dark']: '#0d3138',
  ['synqats-gb-bg-diff-red-dark']: '#3c1f1e',
  ['synqats-gb-bg-visual-yellow-dark']: '#473c29',
  ['synqats-gb-bg-visual-green-dark']: '#333e34',
  ['synqats-gb-bg-visual-blue-dark']: '#2e3b3b',
  ['synqats-gb-bg-visual-red-dark']: '#442e2d',
  ['synqats-gb-bg-accent-yellow-dark']: '#d8a656',
  ['synqats-gb-bg-accent-green-dark']: '#a8b665',
  ['synqats-gb-bg-accent-red-dark']: '#ea6962',
  ['synqats-gb-fg-0-dark']: '#d4be98',
  ['synqats-gb-fg-1-dark']: '#ddc7a0',
  ['synqats-gb-grey-0-dark']: '#7c6f64',
  ['synqats-gb-grey-1-dark']: '#918274',
  ['synqats-gb-grey-2-dark']: '#a79a83',
  ['synqats-gb-accent-red-dark']: '#ea6962',
  ['synqats-gb-accent-orange-dark']: '#e78a4f',
  ['synqats-gb-accent-yellow-dark']: '#d8a656',
  ['synqats-gb-accent-green-dark']: '#a8b665',
  ['synqats-gb-accent-aqua-dark']: '#89B48',
  ['synqats-gb-accent-blue-dark']: '#7caea3',
  ['synqats-gb-accent-purple-dark']: '#d3859b',

  ['synqats-gb-bg-0-light']: '#f9f5d7',
  ['synqats-gb-bg-1-light']: '#f5edca',
  ['synqats-gb-bg-2-light']: '#f2eac7',
  ['synqats-gb-bg-3-light']: '#f2e4bc',
  ['synqats-gb-bg-4-light']: '#efdfb7',
  ['synqats-gb-bg-5-light']: '#ebdbb2',
  ['synqats-gb-bg-dim-light']: '#f2eac7',
  ['synqats-gb-bg-word-light']: '#f2eac7',
  ['synqats-gb-bg-diff-green-light']: '#e4edc7',
  ['synqats-gb-bg-diff-blue-light']: '#e0e9d3',
  ['synqats-gb-bg-diff-red-light']: '#f8e4c9',
  ['synqats-gb-bg-visual-yellow-light']: '#f9e9bf',
  ['synqats-gb-bg-visual-green-light']: '#dce5c2',
  ['synqats-gb-bg-visual-blue-light']: '#d8e1cc',
  ['synqats-gb-bg-visual-red-light']: '#f0ddc3',
  ['synqats-gb-bg-accent-yellow-light']: '#a96b2d',
  ['synqats-gb-bg-accent-green-light']: '#6f8252',
  ['synqats-gb-bg-accent-red-light']: '#ae5858',
  ['synqats-gb-fg-0-light']: '#644735',
  ['synqats-gb-fg-1-light']: '#503829',
  ['synqats-gb-grey-0-light']: '#a79a83',
  ['synqats-gb-grey-1-light']: '#928374',
  ['synqats-gb-grey-2-light']: '#7c6f64',
  ['synqats-gb-accent-red-light']: '#c14a4a',
  ['synqats-gb-accent-orange-light']: '#c35e0a',
  ['synqats-gb-accent-yellow-light']: '#b37109',
  ['synqats-gb-accent-green-light']: '#6c782e',
  ['synqats-gb-accent-aqua-light']: '#4b7a5d',
  ['synqats-gb-accent-blue-light']: '#45707a',
  ['synqats-gb-accent-purple-light']: '#945e80',
}

const generateCredits = () =>
  `/**\n * ${Object.entries(CREDITS)
    .map(([key, value]) => {
      return `@${key} ${value}`
    })
    .join('\n * ')}\n*/`

const generateImportUrl = () => `\n\n@import "${LATEST_URL}";`

const generateSettings = () =>
  `\n\n/* it is what it is */\n:root {\n  ${Object.entries(SETTINGS)
    .map(([key, value]) => `--${key}: ${value};`)
    .join('\n  ')}\n}`

const main = async () => {
  console.log('(credits) generating...')
  await writeFile(resolve(__dirname, 'theme.css'), generateCredits())
  console.log('(credits) appending latest url...')
  await appendFile(resolve(__dirname, 'theme.css'), generateImportUrl())
  console.log('(credits) appending settings...')
  await appendFile(resolve(__dirname, 'theme.css'), generateSettings())
  console.log('(credits) done!')
  process.exit(0)
}

main()
