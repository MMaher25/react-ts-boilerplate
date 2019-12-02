import React from 'react';
import Pokemon from '../Components/Pokemon';
import { StoreProvider } from '../Store/Store';
import { create, act } from 'react-test-renderer';

const pokemon = create(<StoreProvider><Pokemon /></StoreProvider>);

describe("Pokemon component", () => {
  it("Matches the snapshot", () => {
    expect(pokemon.toJSON()).toMatchSnapshot();
  });
});

describe("Pokemon component", () => {
  it("it shows a random Pokemon when clicked", async () => {
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