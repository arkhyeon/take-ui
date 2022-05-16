import React, { PropsWithChildren } from 'react';

type Props = {
  name: string;
};
function MyComponent({ name }: PropsWithChildren<Props>): JSX.Element {
  return <h1>{name}!</h1>;
}
export default MyComponent;
