export default function (state = {}, action) {
    switch (action.type) {
        case 'SIGNIN_USER':
            return action.payload;

        case 'CLEAR_USER':
            return null;

        default:
            return state
    }
}