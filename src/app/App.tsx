import React from 'react';
import { hot } from 'react-hot-loader';
import { AppRootProps } from '../routing/routes';
import { RouteLoader } from '../routing';

const AppRoot = (props: AppRootProps) => {
  return <RouteLoader {...props} />;
};

export default hot(module)(AppRoot);
