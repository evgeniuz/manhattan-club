import { combineReducers, Reducer, AnyAction } from 'redux'

import {
	ISelectTeamAction,
	IUpdateScoresAction,
	IUpdateTeamsAction,
	IUpdateAchievementsAction,
	SELECT_TEAM,
	UPDATE_SCORES,
	UPDATE_TEAMS,
	UPDATE_ACHIEVEMENTS
} from 'actions'

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

function achievements(
	state: IAchievement[] = [],
	action: IUpdateAchievementsAction
): IAchievement[] {
	switch (action.type) {
		case UPDATE_ACHIEVEMENTS:
			return action.achievements
		default:
			return state
	}
}

function teams(state: ITeam[] = [], action: IUpdateTeamsAction): ITeam[] {
	switch (action.type) {
		case UPDATE_TEAMS:
			return action.teams
		default:
			return state
	}
}

function scoresHTML(state: string = '', action: IUpdateScoresAction): string {
	switch (action.type) {
		case UPDATE_SCORES:
			return action.scoresHTML
		default:
			return state
	}
}

export interface IState {
	achievements: IAchievement[]
	teams: ITeam[]
	selectedTeam: ITeam | null
	scoresHTML: string
}

export const rootReducer: Reducer<IState, AnyAction> = combineReducers({
	scoresHTML,
	selectedTeam,
	achievements,
	teams
})
