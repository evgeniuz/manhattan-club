import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, Store } from 'redux'

import * as iconv from 'iconv-lite'

import { updateScores } from './actions'
import { ACHIEVEMENTS, IAchievement, IState, ITeam, TEAMS } from './constants'
import reducers from './reducers'

import Achievements from './components/Achievements'
import Main from './components/Main'
import Password from './components/Password'

import './css/index.css'

function getAchievementByID(achievementID: string): IAchievement | undefined {
	return ACHIEVEMENTS.find(
		(achievement: IAchievement) => achievement.id === achievementID
	)
}

function getAchievementsByIDs(achievementIDs: string[]): IAchievement[] {
	return achievementIDs.reduce(
		(achievements: IAchievement[], achievementID: string) => {
			const achievement: IAchievement | undefined = getAchievementByID(
				achievementID
			)

			return achievement ? [...achievements, achievement] : achievements
		},
		[]
	)
}

const processedTeams: ITeam[] = TEAMS.map((team: ITeam) => {
	const achievements: IAchievement[] = getAchievementsByIDs(team.achievementIDs)

	return Object.assign({}, team, { achievements })
})

processedTeams.sort((a: ITeam, b: ITeam) => {
	if (a.achievementIDs.length > b.achievementIDs.length) {
		return -1
	}
	if (a.achievementIDs.length < b.achievementIDs.length) {
		return 1
	}

	return 0
})

const preloadedState: IState = {
	scoresHTML: '',
	selectedTeam: processedTeams[0],
	teams: processedTeams
}

const store: Store = createStore(reducers, preloadedState)

fetch('/scores.html')
	.then((response: Response) => response.arrayBuffer())
	.then((buffer: ArrayBuffer) =>
		iconv.decode(Buffer.from(new Uint8Array(buffer)), 'win1251')
	)
	.then((html: string) => store.dispatch(updateScores(html)))

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
