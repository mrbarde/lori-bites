import React from 'react';
import Notification from '../src/notifications/components/Item';
import renderer from 'react-test-renderer';


test('Render a notification ', () => {
    const component = renderer.create(
        <Notification positionStyles={'topRight'} 
            delay={5000} message="Hello world!"/>
    );
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
