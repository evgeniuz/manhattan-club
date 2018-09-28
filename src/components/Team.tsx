import * as React from 'react'

import { IAchievement, ITeam } from '../constants'

import Achievement from './Achievement'

export interface IProps {
	team: ITeam
}

/* tslint:disable-next-line:function-name */
function Team({ team }: IProps): JSX.Element {
	return (
		<div>
			<h2 className="text-center">Команда «{team.name}»</h2>
			{team.achievements.map((achievement: IAchievement) => (
				<Achievement key={achievement.id} achievement={achievement} />
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

export default Team
