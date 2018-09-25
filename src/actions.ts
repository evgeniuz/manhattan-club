import { ITeam, SELECT_TEAM, UPDATE_SCORES } from './constants'

export interface ISelectTeamAction {
	type: SELECT_TEAM
	team: ITeam
}

export interface IUpdateScoresAction {
	type: UPDATE_SCORES
	scoresHTML: string
}

export function selectTeam(team: ITeam): ISelectTeamAction {
	return { team, type: SELECT_TEAM }
}

export function updateScores(scoresHTML: string): IUpdateScoresAction {
	return { scoresHTML, type: UPDATE_SCORES }
}
