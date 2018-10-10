interface IAchievement {
	id: string
	name: string
	description: string
}

interface ITeamAchievement {
	achievementId: string
	count: number
}

interface ITeam {
	name: string
	teamAchievements: ITeamAchievement[]
}
