import * as React from 'react'

import Achievement from 'components/Achievement'

export interface IProps {
	team: ITeam
}

/* tslint:disable-next-line:function-name */
export default function Team({ team }: IProps): JSX.Element {
	return (
		<div>
			<h2 className="text-center">Команда «{team.name}»</h2>
			{team.teamAchievements.map((teamAchievement: ITeamAchievement) => (
				<Achievement
					key={teamAchievement.achievementId}
					achievementId={teamAchievement.achievementId}
					count={teamAchievement.count}
				/>
			))}
			<div className="text-center">
				<div
					className="fb-comments"
					data-href="https://manhattanquiz.club/achievements"
					data-numposts="10"
					data-colorscheme="dark"
				/>
			</div>
		</div>
	)
}
