import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { createStore, Store, applyMiddleware, AnyAction } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk, { ThunkMiddleware, ThunkDispatch } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {
	fetchScores,
	fetchTeams,
	fetchAchievements,
	fetchAnswers
} from 'actions'
import { rootReducer, IState } from 'reducers'
import { unregisterServiceWorker } from 'utils'

import Main from 'components/Main'
import Achievements from 'components/Achievements'
import Password from 'components/Password'

import 'css/index.scss'

unregisterServiceWorker()

const store: Store & {
	dispatch: ThunkDispatch<IState, undefined, AnyAction>
} = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(reduxThunk as ThunkMiddleware))
)

store.dispatch(fetchScores())
store.dispatch(fetchTeams())
store.dispatch(fetchAchievements())
store.dispatch(fetchAnswers())

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact={true} path="/" component={Main} />
				<Route path="/achievements" component={Achievements} />
				<Route path="/password" component={Password} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
