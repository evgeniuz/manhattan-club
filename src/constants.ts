export const SELECT_TEAM: string = 'SELECT_TEAM'
export type SELECT_TEAM = typeof SELECT_TEAM

export const UPDATE_SCORES: string = 'UPDATE_SCORES'
export type UPDATE_SCORES = typeof UPDATE_SCORES

export const UPDATE_TEAMS: string = 'UPDATE_TEAMS'
export type UPDATE_TEAMS = typeof UPDATE_TEAMS

export const UPDATE_ACHIEVEMENTS: string = 'UPDATE_ACHIEVEMENTS'
export type UPDATE_ACHIEVEMENTS = typeof UPDATE_ACHIEVEMENTS

export interface IAchievement {
	id: string
	name: string
	description: string
}

export interface ITeamAchievement {
	achievementId: string
	count: number
}

export interface ITeam {
	name: string
	teamAchievements: ITeamAchievement[]
}

export interface IState {
	achievements: IAchievement[]
	teams: ITeam[]
	selectedTeam: ITeam | null
	scoresHTML: string
}
