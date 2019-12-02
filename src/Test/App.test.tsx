import React from 'react';
import App from '../App';
import { StoreProvider } from '../Store/Store';
import { create } from 'react-test-renderer';

describe("App component", () => {
  test("Matches the snapshot", () => {
    const app = create(<StoreProvider><App /></StoreProvider>);
    expect(app.toJSON()).toMatchSnapshot();
  });
});
