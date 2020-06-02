// ssr support
export const inBrowser = typeof window !== 'undefined'

export const ua = inBrowser && navigator.userAgent.toLowerCase()
export const isAndroid = ua && ua.indexOf('android') > 0
export const isIOS = ua && /iphone|ipad|ipod|ios/.test(ua)

export const lowAndroid = /android|adr/gi.test(ua) && (ua.substr(ua.indexOf('android') + 8, 3)) < 4.3

export const IE8lte = (!window.addEventListener || /MSIE 8/.test(navigator.userAgent))
