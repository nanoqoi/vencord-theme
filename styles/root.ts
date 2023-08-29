import { css } from 'utils/css'

const prefix = 'synqats-gb'

const colors = {
  dark: {
    bg: {
      0: '#1e2021',
      1: '#282828',
      2: '#282828',
      3: '#3c3836',
      4: '#3c3836',
      5: '#504944',
      dim: '#141617',
      word: '#32302f',
      diff: {
        green: '#32361a',
        blue: '#0d3138',
        red: '#3c1f1e',
      },
      visual: {
        yellow: '#473c29',
        green: '#333e34',
        blue: '#2e3b3b',
        red: '#442e2d',
      },
      accent: {
        yellow: '#d8a656',
        green: '#a8b665',
        red: '#ea6962',
      },
    },
    fg: {
      0: '#d4be98',
      1: '#ddc7a0',
    },
    grey: {
      0: '#7c6f64',
      1: '#918274',
      2: '#a79a83',
    },
    accent: {
      red: '#ea6962',
      orange: '#e78a4f',
      yellow: '#d8a656',
      green: '#a8b665',
      aqua: '#89B48',
      blue: '#7caea3',
      purple: '#d3859b',
    },
  },
  light: {
    bg: {
      0: '#f9f5d7',
      1: '#f5edca',
      2: '#f2eac7',
      3: '#f2e4bc',
      4: '#efdfb7',
      5: '#ebdbb2',
      dim: '#f2eac7',
      word: '#f2eac7',
      diff: {
        green: '#e4edc7',
        blue: '#e0e9d3',
        red: '#f8e4c9',
      },
      visual: {
        yellow: '#f9e9bf',
        green: '#dce5c2',
        blue: '#d8e1cc',
        red: '#f0ddc3',
      },
      accent: {
        yellow: '#a96b2d',
        green: '#6f8252',
        red: '#ae5858',
      },
    },
    fg: {
      0: '#644735',
      1: '#503829',
    },
    grey: {
      0: '#a79a83',
      1: '#928374',
      2: '#7c6f64',
    },
    accent: {
      red: '#c14a4a',
      orange: '#c35e0a',
      yellow: '#b37109',
      green: '#6c782e',
      aqua: '#4b7a5d',
      blue: '#45707a',
      purple: '#945e80',
    },
  },
} as const

type Colors = typeof colors.light | typeof colors.dark

const handleVarReferencesObject = (
  prefix: string,
  suffix: string | null,
  colors: Colors,
) => {
  let out: Colors = {} as Colors

  for (const [k, value] of Object.entries(colors)) {
    const key = `${prefix}-${k}`
    if (typeof value === 'string') {
      // @ts-ignore
      out[k] = `var(--${key}${suffix ? `-${suffix}` : ''})`
    } else {
      // @ts-ignore
      out[k] = handleVarReferencesObject(key, suffix, value)
    }
  }

  return out
}

const vars = {
  dark: handleVarReferencesObject(prefix, 'dark', colors.dark),
  light: handleVarReferencesObject(prefix, 'light', colors.light),
} as const

const handleColors = (
  prefix: string,
  suffix: string | null,
  colors: Colors,
) => {
  let out = ''
  for (const [k, value] of Object.entries(colors)) {
    const key = `${prefix}-${k}`
    if (typeof value === 'string') {
      out += `--${key}${suffix ? `-${suffix}` : ''}: ${value};\n  `
    } else {
      out += handleColors(key, suffix, value)
    }
  }
  return out
}

// reference to the generated colour vars above
const handleVarReferences = (
  prefix: string,
  suffix: string | null,
  colors: Colors,
) => {
  let out = ''
  for (const [k, value] of Object.entries(colors)) {
    const key = `${prefix}-${k}`
    if (typeof value === 'string') {
      out += `--${key}: var(--${key}${suffix ? `-${suffix}` : ''});\n  `
    } else {
      out += handleVarReferences(key, suffix, value)
    }
  }
  return out.trim()
}

export const root = css`
  :root {
    ${handleColors(prefix, 'dark', colors.dark)}
    ${handleColors(prefix, 'light', colors.light)}
  }

  .theme-light:root {
    ${handleVarReferences(prefix, 'light', colors.light)}
  }

  .theme-dark:root {
    ${handleVarReferences(prefix, 'dark', colors.dark)}
  }
`
