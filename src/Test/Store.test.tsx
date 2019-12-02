import React from 'react';
import { StoreProvider } from '../Store/Store';
import { create } from 'react-test-renderer';

describe("StoreProvider component", () => {
  test("Matches the snapshot", () => {
    const storeProvider = create(<StoreProvider><div></div></StoreProvider>);
    expect(storeProvider.toJSON()).toMatchSnapshot();
  });
});
