import React from 'react';
import { StoreProvider } from '../Store/Store';
import { create } from 'react-test-renderer';

const storeProvider = create(<StoreProvider><div></div></StoreProvider>);

describe("StoreProvider component", () => {
  it("Matches the snapshot", () => {
    expect(storeProvider.toJSON()).toMatchSnapshot();
  });
});
