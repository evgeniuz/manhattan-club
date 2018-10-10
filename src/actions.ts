export const SELECT_TEAM: string = 'SELECT_TEAM'
export const UPDATE_SCORES: string = 'UPDATE_SCORES'
export const UPDATE_TEAMS: string = 'UPDATE_TEAMS'
export const UPDATE_ACHIEVEMENTS: string = 'UPDATE_ACHIEVEMENTS'

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
