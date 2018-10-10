import * as React from 'react'

import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMedal } from '@fortawesome/free-solid-svg-icons'

library.add(faMedal)

interface IStoreProps {
	achievements: IAchievement[]
}

interface IOwnProps {
	achievementId: string
	count: number
}

export type IProps = IStoreProps & IOwnProps

/* tslint:disable-next-line:function-name */
function Achievement({
	achievementId,
	count,
	achievements
}: IProps): JSX.Element | null {
	if (!count) return null

	const achievement: IAchievement | undefined = achievements.find(
		(achievement: IAchievement) => achievement.id === achievementId
	)

	if (!achievement) return null

	return (
		<div className="card bg-dark mb-1">
			<div className="card-header">
				<h3 className="mb-0">
					<FontAwesomeIcon icon={faMedal} />
					&nbsp;
					{count > 1 ? `${count}×` : null}
					{achievement.name}
				</h3>
			</div>
			<div className="card-body">{achievement.description}</div>
		</div>
	)
}

export default connect((state: IStoreProps, ownProps: IOwnProps) =>
	Object.assign({}, state, ownProps)
)(Achievement)
