import { Dispatch, AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

import * as iconv from 'iconv-lite'

import { IState } from 'reducers'

type ThunkResult<R> = ThunkAction<R, IState, undefined, AnyAction>

export const SELECT_TEAM: string = 'SELECT_TEAM'
export const UPDATE_SCORES: string = 'UPDATE_SCORES'
export const UPDATE_TEAMS: string = 'UPDATE_TEAMS'
export const UPDATE_ACHIEVEMENTS: string = 'UPDATE_ACHIEVEMENTS'
export const UPDATE_ANSWERS: string = 'UPDATE_ANSWERS'

export interface ISelectTeamAction {
	type: typeof SELECT_TEAM
	team: ITeam
}

export interface IUpdateScoresAction {
	type: typeof UPDATE_SCORES
	scoresHTML: string
}

export interface IUpdateAchievementsAction {
	type: typeof UPDATE_ACHIEVEMENTS
	achievements: IAchievement[]
}

export interface IUpdateTeamsAction {
	type: typeof UPDATE_TEAMS
	teams: ITeam[]
}

export interface IUpdateAnswersAction {
	type: typeof UPDATE_ANSWERS
	answers: string[]
}

export function selectTeam(team: ITeam): ISelectTeamAction {
	return { team, type: SELECT_TEAM }
}

export function updateScores(scoresHTML: string): IUpdateScoresAction {
	return { scoresHTML, type: UPDATE_SCORES }
}

export function updateAchievements(
	achievements: IAchievement[]
): IUpdateAchievementsAction {
	return { achievements, type: UPDATE_ACHIEVEMENTS }
}

export function updateTeams(teams: ITeam[]): IUpdateTeamsAction {
	return { teams, type: UPDATE_TEAMS }
}

export function updateAnswers(answers: string[]): IUpdateAnswersAction {
	return { answers, type: UPDATE_ANSWERS }
}

export function fetchScores(): ThunkResult<void> {
	return (dispatch: Dispatch): void => {
		fetch('/data/scores.html')
			.then((response: Response) => response.arrayBuffer())
			.then((buffer: ArrayBuffer) =>
				iconv.decode(Buffer.from(new Uint8Array(buffer)), 'win1251')
			)
			.then((html: string) => dispatch(updateScores(html)))
	}
}

export function fetchAchievements(): ThunkResult<void> {
	return (dispatch: Dispatch): void => {
		fetch('/data/achievements.json')
			.then((response: Response) => response.json())
			.then((achievements: IAchievement[]) =>
				dispatch(updateAchievements(achievements))
			)
	}
}

export function fetchTeams(): ThunkResult<void> {
	return (dispatch: Dispatch): void => {
		fetch('/data/teams.json')
			.then((response: Response) => response.json())
			.then((teams: ITeam[]) => {
				dispatch(updateTeams(teams))

				if (teams.length > 0) {
					dispatch(selectTeam(teams[0]))
				}
			})
	}
}

export function fetchAnswers(): ThunkResult<void> {
	return (dispatch: Dispatch): void => {
		fetch('/data/answers.json')
			.then((response: Response) => response.json())
			.then((answers: string[]) => {
				dispatch(updateAnswers(answers))
			})
	}
}
