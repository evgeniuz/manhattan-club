import { Store } from 'redux'

import * as iconv from 'iconv-lite'

import {
	updateScores,
	updateAchievements,
	updateTeams,
	selectTeam
} from 'actions'

export function fetchData(store: Store) {
	fetch('/data/scores.html')
		.then((response: Response) => response.arrayBuffer())
		.then((buffer: ArrayBuffer) =>
			iconv.decode(Buffer.from(new Uint8Array(buffer)), 'win1251')
		)
		.then((html: string) => store.dispatch(updateScores(html)))

	fetch('/data/achievements.json')
		.then((response: Response) => response.json())
		.then((achievements: IAchievement[]) =>
			store.dispatch(updateAchievements(achievements))
		)

	fetch('/data/teams.json')
		.then((response: Response) => response.json())
		.then((teams: ITeam[]) => {
			store.dispatch(updateTeams(teams))

			if (teams.length > 0) {
				store.dispatch(selectTeam(teams[0]))
			}
		})
}

export function unregisterServiceWorker() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.ready.then(
			(registration: ServiceWorkerRegistration) => registration.unregister()
		)
	}
}
