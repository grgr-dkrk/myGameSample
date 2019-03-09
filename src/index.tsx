import * as React from 'react';
import * as ReactDOM from 'react-dom';

type Props = {
  greeting: string;
};

const Hello = (props: Props) => {
  return <h1>{props.greeting}</h1>;
};

ReactDOM.render(
  <Hello greeting="Hello World" />,
  document.querySelector('#App')
);
