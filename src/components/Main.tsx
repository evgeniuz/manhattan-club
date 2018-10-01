import * as React from 'react'
import { connect } from 'react-redux'

import Header from './Header'

export interface IProps {
	scoresHTML: string
}

/* tslint:disable-next-line:function-name */
function Main({ scoresHTML }: IProps): JSX.Element {
	return (
		<React.Fragment>
			<Header title="Результаты" />
			<div dangerouslySetInnerHTML={{ __html: scoresHTML }} />
		</React.Fragment>
	)
}

export default connect((state: IProps) => state)(Main)
