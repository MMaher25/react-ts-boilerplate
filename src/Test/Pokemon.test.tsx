import React from 'react';
import Pokemon from '../Components/Pokemon';
import { StoreProvider } from '../Store/Store';
import { create, act } from 'react-test-renderer';

describe("Pokemon component", () => {
  test("Matches the snapshot", () => {
    const pokemon = create(<StoreProvider><Pokemon /></StoreProvider>);
    expect(pokemon.toJSON()).toMatchSnapshot();
  });
});

describe("Pokemon component", () => {
  test("it shows a random Pokemon when clicked", async () => {
    const pokemon = create(<StoreProvider><Pokemon /></StoreProvider>);
    const instance = pokemon.root;
    const button = instance.findByType("button");
    const nameDiv = instance.findByProps({id: 'pokemon-name'});
    await act(() => button.props.onClick());
    act(() => console.log(nameDiv.props.children));
    expect(nameDiv.props.children[0]).not.toBe('');
    expect(nameDiv.props.children[2]).toBeGreaterThan(0);
    expect(nameDiv.props.children[2]).toBeLessThanOrEqual(807);
  });
});