import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const uid = '123qwslkdjas';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate login action', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});