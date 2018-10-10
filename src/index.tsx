import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { createStore, Store } from 'redux'
import { Provider } from 'react-redux'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { rootReducer } from 'reducers'
import { unregisterServiceWorker, fetchData } from 'utils'

import Achievements from 'components/Achievements'
import Main from 'components/Main'

import 'css/index.scss'

unregisterServiceWorker()

const store: Store = createStore(
	rootReducer,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

fetchData(store)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact={true} path="/" component={Main} />
				<Route path="/achievements" component={Achievements} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
