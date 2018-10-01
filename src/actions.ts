import {
	ITeam,
	IAchievement,
	SELECT_TEAM,
	UPDATE_SCORES,
	UPDATE_ACHIEVEMENTS,
	UPDATE_TEAMS
} from './constants'

export interface ISelectTeamAction {
	type: SELECT_TEAM
	team: ITeam
}

export interface IUpdateScoresAction {
	type: UPDATE_SCORES
	scoresHTML: string
}

export interface IUpdateAchievementsAction {
	type: UPDATE_ACHIEVEMENTS
	achievements: IAchievement[]
}

export interface IUpdateTeamsAction {
	type: UPDATE_TEAMS
	teams: ITeam[]
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
