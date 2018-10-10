import * as React from 'react'

import { connect } from 'react-redux'

import Header from 'components/Header'
import Teams from 'components/Teams'
import Team from 'components/Team'

export interface IProps {
	selectedTeam: ITeam
}

/* tslint:disable-next-line:function-name */
function Achievements({ selectedTeam }: IProps): JSX.Element {
	return (
		<React.Fragment>
			<Header title="Достижения" />
			<div className="container text-light">
				<div className="row">
					<div className="col-md-4">
						<Teams />
					</div>

					<div className="col-md-8">
						{selectedTeam && <Team team={selectedTeam} />}
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default connect((state: IProps) => state)(Achievements)
