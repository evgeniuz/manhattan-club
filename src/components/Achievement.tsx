import * as React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IAchievement } from '../constants'

library.add(faMedal)

export interface IProps {
	achievement: IAchievement
}

/* tslint:disable-next-line:variable-name typedef */
const Achievement = ({ achievement }: IProps) => (
	<div className="card bg-dark mb-1">
		<div className="card-header">
			<h3 className="mb-0">
				<FontAwesomeIcon icon={faMedal} />
				&nbsp;
				{achievement.name}
			</h3>
		</div>
		<div className="card-body">{achievement.description}</div>
	</div>
)

export default Achievement
