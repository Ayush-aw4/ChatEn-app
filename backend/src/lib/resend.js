import {Resend} from 'resend'
import {ENV} from './env.js'

export const resendClient = new Resend(ENV.RESEND_API_KEY);

export const sender = {
    email: ENV.RESEND_EMAIL_FROM,
    name: ENV.RESEND_EMAIL_FROM_NAME
}