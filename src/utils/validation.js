
export function validateEmailDetails(email){
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    if(!isValidEmail) return "not a valid email address";
    
    return null;
}

export const validatePasswordDetails = (password)=>{
    const isValidPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    if(!isValidPassword) return "not a valid password";

    return null

}

