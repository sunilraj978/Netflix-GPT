export const checkValidation = (email,password,fullName) => {

    const isEmailValid = 
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    .test(password)
    
    const fullNameValid = /^[a-zA-Z ]+$/.test(fullName)

    if(!fullNameValid){
        return "FullName is not valid"
    }

    if (!isEmailValid) {
        return "Email is not valid. Please enter a valid email address in the format: example@domain.com";
    }
    
    if (!passwordValid) {
        return "Password is not valid. The password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    return null

}