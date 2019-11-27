
import * as React from 'react';
import { hot } from "react-hot-loader/root";
interface IProps {
  name: string
}

const App = (props: IProps) => {
  const { name } = props;
  return (
    <div>Hello {name}</div>
  )
}

export default hot(App);
