export function SignInUser(user){
    return {
        type: 'SIGNIN_USER',
        payload: user
    }
}

export function SignOutUser(){
    return {
        type: 'CLEAR_USER',
        payload: null
    }
}
