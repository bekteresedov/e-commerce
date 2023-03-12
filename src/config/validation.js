
export const usernameValidation=(name)=>{

    if(!name){
        return "Username Cannot be Null";
    }else if(name.length>15||name.length<3){
        return `It must have minimum 3 and maximum 15 characters`
    }
    else{
        return;
    }

}

export const displayNameValidation=(displayName)=>{

    if(!displayName){
        return "Display Name Cannot be Null";
    }else if(displayName.length>15||displayName.length<3){
        return `It must have minimum 3 and maximum 15 characters`
    }
    else{
        return;
    }

}

export const passwordValidation=(password)=>{

    if(!password){
        return "Password Cannot be Null";
    }else if(password.length>25||password.length<8){
        return `It must have minimum 8 and maximum 25 characters`
    }
    else{
        return;
    }

}

export const passwordRepeatValidaton=(password,passwordRepeat)=>{

    if (password || passwordRepeat) {

          return password === passwordRepeat ? "" : "Password mismatch";
      }

}