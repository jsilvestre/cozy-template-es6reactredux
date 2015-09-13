import * as React from 'react/addons';
import * as Router from 'react-router';
const {Route} = Router;
import { Provider } from 'react-redux';
// import * as RoutesHandler from './routes-handler';
import Application from './components/application';

import { configureStore } from './store.js';
const store = configureStore();

export function start() {
    const routes = (
        <Route handler={Application} name="placeholder" path="/" />
    );

    Router.run(routes, Router.HashLocation, (Root, state) => {
        // Execute a handler based on the active route.
        const currentRoute = state.routes[0];

        let query;
        let splat;
        switch (currentRoute.name) {
            default:
                console.log(query, splat);
                break;
        }

        // Start React application.
        const node = document.querySelector('#mount-point');
        React.render(
            <Provider store={store}>
                {() =>
                    <Root />
                }
            </Provider>, node);
    });
}
