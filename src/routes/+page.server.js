// +page.server.js
import forms from './forms.js'
import { fail } from '@sveltejs/kit'

export const actions = forms.createActions(
    {
        register: async ( event, { formData }) =>
        {
            const email = formData.get('email')

            // This will throw an error shown below the email field.
            if ( email === 'elon@twitter.com') throw fail(400, { email: "Only if you give me a free tesla I will let you in" }) 

            // TODO: actually create the user...

            // if you remove the condition, this would cause a plain error to be shown above the form.
            if ( false ) throw fail(404, 'Something went wrong. Please try again later!')
            
            return 'Registration complete!'
        }
    }
)