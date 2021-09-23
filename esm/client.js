import 'isomorphic-fetch';
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-router-config';
import 'jsonpath-mapper';
import 'redux';
import 'redux-thunk';
import 'redux-saga';
import 'redux-injectors';
import 'immer';
import { c as createStore, s as setVersionStatus } from './version-f8aa9702.js';
import { s as setCurrentProject } from './actions-3cc39599.js';
import './reducers-d6c0edb1.js';
import 'history';
import { d as deliveryApi, b as browserHistory, r as rootSaga, p as pickProject } from './App-a2b9ac6e.js';
export { A as ReactApp } from './App-a2b9ac6e.js';
import '@redux-saga/core/effects';
import 'contensis-delivery-api';
import './selectors-82e71d8e.js';
import './version-59c8f9be.js';
import { parse } from 'query-string';
import 'loglevel';
import './ToJs-52fee252.js';
import './login-92db44d1.js';
import 'await-to-js';
import 'js-cookie';
import { AppContainer } from 'react-hot-loader';
import './RouteLoader-c2faac87.js';
import { hydrate, render } from 'react-dom';
import { loadableReady } from '@loadable/component';

class ClientApp {
  constructor(ReactApp, config) {
    const documentRoot = document.getElementById('root');
    const {
      stateType = 'immutable',
      routes,
      withReducers,
      withSagas,
      withEvents
    } = config;

    const GetClientJSX = store => {
      const ClientJsx = /*#__PURE__*/React.createElement(AppContainer, null, /*#__PURE__*/React.createElement(Provider, {
        store: store
      }, /*#__PURE__*/React.createElement(Router, {
        history: browserHistory
      }, /*#__PURE__*/React.createElement(ReactApp, {
        routes: routes,
        withEvents: withEvents
      }))));
      return ClientJsx;
    };

    const isProduction = !(process.env.NODE_ENV !== 'production');
    /**
     * Webpack HMR Setup.
     */

    const HMRRenderer = Component => {
      if (isProduction) loadableReady(() => {
        hydrate(Component, documentRoot);
      }, {
        namespace: 'modern'
      });else render(Component, documentRoot);
    };

    const hmr = store => {
      // webpack Hot Module Replacement API
      if (module.hot) {
        module.hot.accept(ReactApp, () => {
          // if you are using harmony modules ({modules:false})
          HMRRenderer(GetClientJSX(store));
        });
      }
    };

    const qs = parse(window.location.search);
    const versionStatusFromHostname = deliveryApi.getClientSideVersionStatus();

    if (window.isDynamic || window.REDUX_DATA || process.env.NODE_ENV !== 'production') {
      createStore(withReducers, window.REDUX_DATA, browserHistory, stateType).then(store => {
        store.dispatch(setVersionStatus(qs.versionStatus || versionStatusFromHostname));
        /* eslint-disable no-console */

        console.log('Hydrating from inline Redux');
        /* eslint-enable no-console */

        store.runSaga(rootSaga(withSagas));
        store.dispatch(setCurrentProject(pickProject(window.location.hostname, qs), [], window.location.hostname));
        delete window.REDUX_DATA;
        HMRRenderer(GetClientJSX(store));
        hmr(store);
      });
    } else {
      fetch(`${window.location.pathname}?redux=true`).then(response => response.json()).then(data => {
        /* eslint-disable no-console */
        // console.log('Got Data Back');
        // console.log(data);

        /* eslint-enable no-console */
        const ssRedux = JSON.parse(data);
        createStore(withReducers, ssRedux, browserHistory, stateType).then(store => {
          // store.dispatch(setVersionStatus(versionStatusFromHostname));
          store.runSaga(rootSaga(withSagas));
          store.dispatch(setCurrentProject(pickProject(window.location.hostname, parse(window.location.search)), [], window.location.hostname)); // if (typeof window != 'undefined') {
          //   store.dispatch(checkUserLoggedIn());
          // }

          HMRRenderer(GetClientJSX(store));
          hmr(store);
        });
      });
    }
  }

}

export default ClientApp;
//# sourceMappingURL=client.js.map
