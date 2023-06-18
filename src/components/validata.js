export const validata = (data, type) => {

    const errors = {}


    if (!data.email) {
        errors.email = 'Enter your email...'
    } else if (!/\S+@\S+/.test(data.email)) {
        errors.email = 'your email address is not True...'
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = 'Enter your password...'
    } else if (data.password.length < 6) {
        errors.password = 'Your password is short'
    } else {
        delete errors.password  
    }

    if (type === 'signup') {

        if (!data.name.trim()) {
            errors.name = 'Enter your name...    '
        } else {
            delete errors.name
        }
        if (!data.confirmPassword) {
            errors.confirmPassword = 'Enter your Password again'
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Your password is not match'
        } else {
            delete errors.confirmPassword
        }

        if (!data.isAccepted) {
            errors.isAccepted = 'NOT Accepted??? '
        } else {
            delete errors.isAccepted
        }

    }

    return errors;
}