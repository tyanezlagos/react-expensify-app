import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'asd12qwqds'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({});
});