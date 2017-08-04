import {lnPush, lnRemove} from '../src/notifications/reducers.js';
import * as types from '../src/notifications/actionTypes.js';

/**
 * Push reducer tests
 */
describe('push reducer', () => {
    it('should return initial state',  () => {

        let expectedState = {
            isPushing: false
        };

        expect(lnPush(undefined, {})).toEqual(expectedState);
    });

    it('should return start state', () => {

        let notification = {
            'message': 'Hello world!'
        };

        let expectedState = {
            type: types.LN_PUSH_START,
            isPushing: true,
            notification: notification
        };

        expect(lnPush({}, expectedState)).toEqual(expectedState);
    });

    it('should return end state', () => {

        let expectedState = {
            type: types.LN_PUSH_END,
            isPushing: false
        };

        expect(lnPush({}, expectedState)).toEqual(expectedState);
    });
});

/**
 * remove reducer tests
 */
describe('remove reducer', () => {

    it('should return initial state',  () =>{

        let expectedState = {
            isRemoving: false
        };

        expect(lnRemove(undefined, {})).toEqual(expectedState);
    });

    it('should return start state', () => {

        let notification_id = 'sf4DWefwe';

        let expectedState = {
            type: types.LN_REMOVE_START,
            isRemoving: true,
            notification_id: notification_id
        };

        expect(lnRemove({}, expectedState)).toEqual(expectedState);
    });

    it('should return end state', () => {

        let expectedState = {
            type: types.LN_REMOVE_END,
            isRemoving: false
        };

        expect(lnRemove({}, expectedState)).toEqual(expectedState);
    });
});