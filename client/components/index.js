/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {default as UserPortal} from './userPortal'
export {default as Products} from './products'
export {default as Cart} from './cart'
export {default as Admin} from './admin'
export {Login, Signup} from './auth-form'
