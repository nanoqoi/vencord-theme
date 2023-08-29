import { css } from 'utils/css'

export const discordCustomStyling = css`
  body,
  html {
    text-rendering: optimizeLegibility !important;
    font-family: 'Rubik', sans-serif !important;
  }

  [class*='membersWrap'] {
    background-color: var(--synqats-gb-bg-dim);
  }

  div[class*='chat']:not(div[class*='expression-picker-chat-input-button']) {
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 16px;
    background-color: transparent;
  }

  section[class*='title'] {
    margin-bottom: 16px;
  }

  div[class*='sidebar'] {
    margin-bottom: 16px;
  }

  div[class*='sidebar'],
  section[class*='title'],
  div[class*='members'],
  aside[class*='profilePanel'],
  main[class*='chatContent'] {
    border-radius: 8px !important;
    overflow: hidden;
  }

  div[class*='members'],
  aside[class*='profilePanel'] {
    margin-left: 16px;
  }

  section[class*='panels'] div[class*='container'] {
    margin-bottom: unset;
  }

  div[class*='members'] [class*='member'] {
    margin-left: unset;
  }

  div[class*='members'] {
    padding: 8px;
    background-color: var(--synqats-gb-bg-word);
  }

  main[class*='chatContent'] {
    background-color: var(--synqats-gb-bg-word);
  }

  [class*='member'] [class*='subText'] {
    display: none;
  }

  [class*='membersGroup'] {
    height: unset;
    padding: 8px 0 4px 8px;
  }

  [id*='message-content'] code {
    max-height: 240px;
  }

  form[class*='form']::before {
    display: none;
  }

  li[id*='chat-messages'] div[class*='groupStart']:first-child {
    margin-top: 8px;
  }

  li[id*='chat-messages'] {
    border-radius: 0px !important;
  }

  .messagelogger-deleted {
    background-color: var(--synqats-gb-bg-diff-red);
    border-left: 4px solid var(--synqats-gb-accent-red);
  }

  [class*='footerSeparator'] {
    box-shadow: none !important;
  }

  svg[class*='artwork'] {
    display: none !important;
    visibility: hidden !important;
  }

  [class*='membersWrap'] {
    height: 100%;
  }

  [class*='membersGroup'] [class*='member']:first-child {
    background: red !important;
  }

  [class*='wordmarkWindows'] svg {
    display: none;
  }
`
