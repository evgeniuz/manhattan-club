import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, Store } from 'redux'

import * as iconv from 'iconv-lite'

import { updateScores, updateAchievements, updateTeams } from './actions'
import reducers from './reducers'
import { IAchievement, ITeam } from './constants'

import Achievements from './components/Achievements'
import Main from './components/Main'
import Password from './components/Password'

import './css/index.css'

const store: Store = createStore(
	reducers,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

fetch('/scores.html')
	.then((response: Response) => response.arrayBuffer())
	.then((buffer: ArrayBuffer) =>
		iconv.decode(Buffer.from(new Uint8Array(buffer)), 'win1251')
	)
	.then((html: string) => store.dispatch(updateScores(html)))

fetch('/achievements.json')
	.then((response: Response) => response.json())
	.then((achievements: IAchievement[]) =>
		store.dispatch(updateAchievements(achievements))
	)

fetch('/teams.json')
	.then((response: Response) => response.json())
	.then((teams: ITeam[]) => store.dispatch(updateTeams(teams)))

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.ready.then(
		(registration: ServiceWorkerRegistration) => registration.unregister()
	)
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact={true} path="/" component={Main} />
				<Route path="/achievements" component={Achievements} />
				<Route path="/password" component={Password} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
)
