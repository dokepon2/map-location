export default function reducer (state = null, action) {
    switch (action.type) {
        case 'SIGNIN_USER':
            return action.payload;

        case 'CLEAR_USER':
            return null;

        default:
            return state
    }
}