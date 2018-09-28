import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { ISelectTeamAction, selectTeam } from '../actions'
import { ITeam } from '../constants'

import Header from './Header'
import Team from './Team'

interface IDispatchProps {
	onSelectTeam: (team: ITeam) => void
}

interface IStateProps {
	teams: ITeam[]
	selectedTeam: ITeam
}

export type IProps = IDispatchProps & IStateProps

/* tslint:disable-next-line:function-name */
function Achievements({
	teams,
	selectedTeam,
	onSelectTeam
}: IProps): JSX.Element {
	return (
		<React.Fragment>
			<div className="container text-light">
				<Header title="Достижения" />
				<div className="row">
					<div className="col-md-4">
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
										{team.achievementIDs.length}
									</span>
								</button>
							))}
						</div>
					</div>

					<div className="col-md-8">
						<Team team={selectedTeam} />
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

function mapDispatchToProps(
	dispatch: Dispatch<ISelectTeamAction>
): IDispatchProps {
	return {
		onSelectTeam: (team: ITeam): ISelectTeamAction => dispatch(selectTeam(team))
	}
}

export default connect(
	(state: IStateProps) => state,
	mapDispatchToProps
)(Achievements)
