import { pluginOverrides } from 'styles/plugin.overrides'
import { css } from 'utils/css'
import { discordCustomStyling } from 'styles/discord.custom-styling'
import { imports } from 'styles/imports'
import { root } from 'styles/root'
import { discordCustomColors } from 'styles/discord.custom-colors'
import { resolve } from 'node:path'
import { writeFileSync } from 'node:fs'

const final = css`
  ${imports}
  ${root}
  
  ${discordCustomColors}
  ${discordCustomStyling}
  
  ${pluginOverrides}
`

writeFileSync(resolve(__dirname, 'raw.css'), final)
