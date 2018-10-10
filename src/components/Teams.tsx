import * as React from 'react'

import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { ISelectTeamAction, selectTeam } from 'actions'

interface IDispatchProps {
	onSelectTeam: (team: ITeam) => void
}

interface IStateProps {
	teams: ITeam[]
	selectedTeam: ITeam
}

export type IProps = IDispatchProps & IStateProps

/* tslint:disable-next-line:function-name */
function Teams({ teams, selectedTeam, onSelectTeam }: IProps): JSX.Element {
	return (
		<div className="list-group bg-dark">
			{teams.map((team: ITeam) => (
				<button
					type="button"
					className={`list-group-item list-group-item-action text-white d-flex justify-content-between align-items-center ${
						selectedTeam === team ? 'active' : 'bg-dark'
					}`}
					key={team.name}
					onClick={onSelectTeam.bind(null, team)}
				>
					<span className="h6 mb-0">{team.name}</span>
					<span className="badge badge-primary badge-pill">
						{team.teamAchievements.reduce(
							(sum: number, item: ITeamAchievement) => sum + item.count,
							0
						)}
					</span>
				</button>
			))}
		</div>
	)
}

export default connect(
	(state: IStateProps) => state,
	(dispatch: Dispatch<ISelectTeamAction>) => {
		return {
			onSelectTeam: (team: ITeam): ISelectTeamAction =>
				dispatch(selectTeam(team))
		}
	}
)(Teams)
