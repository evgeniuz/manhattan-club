import * as React from 'react'
import { connect } from 'react-redux'

import Header from './Header'

interface IStateProps {
	scoresHTML: string
}

export type IProps = IStateProps

/* tslint:disable-next-line:variable-name typedef */
const Main = ({ scoresHTML }: IProps) => (
	<React.Fragment>
		<Header title="Результаты" />
		<div dangerouslySetInnerHTML={{ __html: scoresHTML }} />
	</React.Fragment>
)

export default connect((state: IStateProps) => state)(Main)
