import React from 'react';
import App from '../App';
import { StoreProvider } from '../Store/Store';
import { create } from 'react-test-renderer';

const app = create(<StoreProvider><App /></StoreProvider>);

describe("App component", () => {
  it("Matches the snapshot", () => {
    expect(app.toJSON()).toMatchSnapshot();
  });
});
