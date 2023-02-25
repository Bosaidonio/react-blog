/*
 * @Date: 2022-10-22 17:50:14
 * @LastEditors: mario marioworker@163.com
 * @LastEditTime: 2022-10-22 19:15:42
 * @Description: Do not edit
 */
interface NavigatorProps extends Navigator {
  webdriver: boolean
  plugins: any
  languages: any
  permissions: any
  [key: string]: any
}

export async function detectAuto() {
  let navigator: NavigatorProps = window.navigator
  if (
    /HeadlessChrome/.test(navigator.userAgent) || // ua test
    !window.chrome || // headless test
    navigator.plugins.length === 0 || //plugins test
    // languages test
    !navigator.languages ||
    navigator.languages.length === 0
  ) {
    return true
  }
  const permissionStatus = await navigator.permissions.query({ name: 'notifications' })

  if (Notification.permission === 'denied' && permissionStatus.state === 'prompt') {
    return true
  }
  const r = []
  const w = [
    'webdriver',
    '__driver_evaluate',
    '__webdriver_evaluate',
    ' __selenium_evaluate',
    '__fxdriver_evaluate',
    '__driver_unwrapped',
    '__webdriver_unwrapped',
    '__selenium_unwrapped',
    '__fxdriver_unwrapped',
    '_Selenium_IDE_Recorder',
    '_selenium',
    'calledSelenium',
    '_WEBDRIVER_ELEM_CACHE',
    'ChromeDriverw',
    'driver-evaluate',
    'webdriver-evaluate',
    'selenium-evaluate',
    'webdriverCommand',
    'webdriver-evaluate-response',
    '__webdriverFunc',
    '__webdriver_script_fn',
    '__$webdriverAsyncExecutor',
    '__lastWatirAlert',
    '__lastWatirConfirm',
    '__lastWatirPrompt',
    '$chrome_asyncScriptInfo',
    '$cdc_asdjflasutopfhvcZLmcfl_',
    '_phantom',
    '_phantomas',
  ]
  w.forEach((t: string) => {
    if (!!window[t] || !!window.document.documentElement.getAttribute(t) || !!navigator[t]) {
      r.push(t)
    }
  })
  return r.length > 0
}
