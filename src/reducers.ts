import { combineReducers, Reducer, AnyAction } from 'redux'

import { ISelectTeamAction, IUpdateScoresAction } from './actions'
import { IState, ITeam, UPDATE_SCORES, SELECT_TEAM } from './constants'

function selectedTeam(
	state: ITeam | null = null,
	action: ISelectTeamAction
): ITeam | null {
	switch (action.type) {
		case SELECT_TEAM:
			return action.team
		default:
			return state
	}
}

function teams(state: ITeam[] = []): ITeam[] {
	return state
}

function scoresHTML(state: string = '', action: IUpdateScoresAction): string {
	switch (action.type) {
		case UPDATE_SCORES:
			return action.scoresHTML
		default:
			return state
	}
}

const rootReducer: Reducer<IState, AnyAction> = combineReducers({
	scoresHTML,
	selectedTeam,
	teams
})

export default rootReducer
