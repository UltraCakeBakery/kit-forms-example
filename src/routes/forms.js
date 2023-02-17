// forms.js
import { create } from 'kit-forms'

export default create(
    {
        signIn: {
            fields: {
                email: {
                    type: 'email',
                    placeholder: 'john.doe@example.com',
                    validate: {
                        isEmail: true
                    }
                },
                password: {
                    type: 'password',
                    placeholder: '************',
                    description: 'Pick a safe and secure password that has a minimum length of 8 characters, and includes atleast one uppercase, lowercase, number and special character.',
                    validate: {
                        minLength: 8,
                        minLowercase: 1,
                        minUppercase: 1,
                        minNumbers: 10,
                        hasSpecial: true
                    }
                }
            }
        },
        signUp: {
            fields: {
                email: {
                    type: 'email',
                    placeholder: 'john.doe@example.com',
                    validate: {
                        isEmail: true
                    }
                },
                password: {
                    type: 'password',
                    placeholder: '************',
                    description: 'Pick a safe and secure password that has a minimum length of 8 characters, and includes atleast one uppercase, lowercase, number and special character.',
                    validate: {
                        minLength: 8,
                        minLowercase: 1,
                        minUppercase: 1,
                        minNumbers: 10,
                        hasSpecial: true
                    }
                },
                'repeat-password': {
                    type: 'password',
                    placeholder: '************',
                    description: 'To make sure you typed your password correctly, please repeat it again here.',
                    validate: {
                        sameAs: 'password'
                    }
                },
                birthday: {
                    type: 'date',
                    placeholder: '10/10/2000',
                    description: 'Only people older than 18 are allowed to sign up for this website!',
                    validate: {
                        minDateDaysAgo: 365 * 18,
                        maxDateDaysAgo: 365 * 100, // To prevent fake spam sign ups
                    }
                },
                website: {
                    type: 'url',
                    placeholder: 'https://mywebsite.example.com',
                    description: 'Only people older than 18 are allowed to sign up for this website!',
                    label: 'Your personal homepage',
                    validate: {
                        isURL: true
                    }
                }
            }
        }
    }
)