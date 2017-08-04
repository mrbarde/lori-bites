import React from 'react';
import {Notifications} from '../src/notifications/components/Notifications';
import renderer from 'react-test-renderer';

test('Notifications Container Will Render', () => {
  const component = renderer.create(
    <Notifications 
      transitionName="fade"
      position="bottomLeft"/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});