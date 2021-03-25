import netlifyIdentity from 'netlify-identity-widget'

export const auth = netlifyIdentity

export const init = (callback) => {
  netlifyIdentity.on('init', user => callback(user))
  netlifyIdentity.init({
    APIUrl: process.env.NEXT_PUBLIC_AUTH_ENDPOINT
  })
}

export const logIn = (callback) => {
  netlifyIdentity.open()
  netlifyIdentity.on('login', user => {
    callback(user) 
    netlifyIdentity.close()
  })
}

export const logOut = (callback) => {
  netlifyIdentity.logout()
  netlifyIdentity.on('logout', () => {
    callback()
  })
}