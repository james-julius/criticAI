////////////////////////////////////
//// Signup Validations

function validateEmail(email) {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function validatePhone(phone) {
    const isNumber = (typeof(Number(phone)) === 'number');
    const minTen = phone.length >= 10;
    return (isNumber && minTen)
}

function validateDOB(DOB) {
    return DOB;
}

function checkEqual(input1,input2) {
    return input1 === input2
}

////////////////////////////////////
//// Job Posting Validations



export { validatePhone, validatePassword, validateEmail, validateDOB, checkEqual }