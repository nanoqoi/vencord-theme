import { css } from 'utils/css'

export const pluginOverrides = css`
  :root {
    --vc-membercount-color: var(--synqats-gb-fg-0);
  }

  #vc-membercount {
    margin-top: 0 !important;
    padding-block: 8px;
    --primary-400: var(--vc-membercount-color);
  }
`
