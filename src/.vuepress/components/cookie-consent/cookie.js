export default class Coookie {
  PATH = '/'
  cookieConsentName = 'fs-cc'
  /** Domain name for cookie.
   * For multiple subdomains (.merginmaps.com) is not possible to set cookies with leading dot in Chrome
   * Workaround will be to set subdomains explicitly to cookies Domain with same name (app.merginmaps.com, merginmaps.com ...)
   * or using some external service for this.
   * Leading dot solution tested in FF (not running in Chrome):
   * - domainName = `.${window.location.hostname.split('.').slice(-2).join('.')}`
   *
   * Finsweet merginmaps.com is not able to write cookies to .merginmaps.com, because they have own merginmaps.com cookie.
   * Prirority is .merginmaps.com, so users options are not sharing between subdomains.
   *
   * Best solution is to use window.location.hostname.
   * */
  domainName = ''

  constructor(cookieConsentName) {
    this.cookieConsentName = cookieConsentName || this.cookieConsentName
    if (typeof window === 'object') {
      this.domainName = window.location.hostname
    }
  }

  _getByName(name) {
    return document.cookie
      .split('; ')
      ?.map((d) => d.split('='))
      ?.find((d) => d[0] === name)?.[1]
  }

  _set(name, options) {
    const expiresDate = new Date()
    expiresDate.setHours(expiresDate.getHours() + options.expirationDays * 24)
    const expires = expiresDate.toUTCString()

    const cookieValue = [
      `${name}=${options.value}`,
      `expires=${expires}`,
      `path=${this.PATH}`,
      `domain=${this.domainName}`,
      `SameSite=None`,
      `Secure`
    ].join(';')

    document.cookie = cookieValue
  }

  getConsentCookies() {
    const json = this._getByName(this.cookieConsentName)
    // Two decodes are important for future fs-cc emulation
    return json && JSON.parse(decodeURIComponent(decodeURIComponent(json)))
  }

  allowCookies() {
    const json = {
      consents: {
        essential: true,
        analytics: true,
        marketing: true,
        personalization: true,
        uncategorized: true
      }
    }
    this._set(this.cookieConsentName, {
      value: encodeURIComponent(encodeURIComponent(JSON.stringify(json))),
      expirationDays: 365
    })
    return json
  }

  denyCookies() {
    const json = {
      consents: {
        essential: true,
        analytics: false,
        marketing: false,
        personalization: false,
        uncategorized: false
      }
    }
    this._set(this.cookieConsentName, {
      value: encodeURIComponent(encodeURIComponent(JSON.stringify(json))),
      expirationDays: 365
    })
    return json
  }

  savePreferences(values) {
    this._set(this.cookieConsentName, {
      value: encodeURIComponent(
        encodeURIComponent(
          JSON.stringify({
            consents: {
              ...values
            }
          })
        )
      ),
      expirationDays: 365
    })
  }
}
