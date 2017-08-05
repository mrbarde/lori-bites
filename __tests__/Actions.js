import * as actions from '../src/notifications/actions';
import * as types from '../src/notifications/actionTypes';

describe("async actions", () => {

    it('starts a notification push sequence', () => {

        let notification = {
            message: 'Hello world!',
            id: '5gge3FFs3'
        };

        let expectedAction = {
            type: types.LN_PUSH_START, 
            isPushing: true, 
            notification: notification
        };

        expect(actions.pushStart(notification)).toEqual(expectedAction);
    });

    it('ends a new notification push sequence', () => {

        let expectedAction = {
            type: types.LN_PUSH_END,
            isPushing: false
        };

        expect(actions.pushEnd()).toEqual(expectedAction);

    });

    it('starts a notification remove sequeence', () => {
        let notification_id = 'FErj3342';

        let expectedAction = {
            type: types.LN_REMOVE_START,
            isRemoving: true,
            notification_id: notification_id
        };

        expect(actions.removeStart(notification_id)).toEqual(expectedAction);
    });

    it('ends a notification remove sequence', () => {
        let expectedAction = {
            type: types.LN_REMOVE_END,
            isRemoving: false
        };

        expect(actions.removeEnd()).toEqual(expectedAction);
    })
    
})