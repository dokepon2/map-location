export default function signUser(user){
    return {
        type: 'SIGNIN_USER',
        payload: user
    }
}

export default function SignoutUser(){
    return {
        type: 'CLEAR_USER',
        payload: null
    }
}