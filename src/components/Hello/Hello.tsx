import * as React from 'react';
import './Hello.css';

interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello: React.FC<HelloProps> = ({
  compiler,
  framework
}: HelloProps) => (
  <h1 className="text">
    Hello from {compiler} and {framework}
  </h1>
);
