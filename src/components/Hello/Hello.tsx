import * as React from 'react';
import './Hello.css';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1 className="text">
    Hello from {props.compiler} and {props.framework}!
  </h1>
);
