import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath],
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} onSignIn={onSignIn}/>, el);

  return {
    // Used in a container
    onParentNavigate({ pathname: nextPathName }) {
      if (history.location.pathname !== nextPathName) {
        history.push(nextPathName)
      }
    }
  }
}


if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#auth-dev-root');

  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() })
  }
}


export { mount };
