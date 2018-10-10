import * as React from 'react'

import Colorize from 'components/Colorize'

import logoPng from 'images/logo.png'

export interface IProps {
	title: string
}

/* tslint:disable-next-line:function-name */
export default function Header({ title }: IProps): JSX.Element {
	return (
		<div className="container mt-3 mb-3">
			<div className="d-flex flex-wrap justify-content-center align-items-center">
				<img height="150" width="150" src={logoPng} alt="logo" />
				<div className="flex-grow-1">
					<h1 className="text-center">
						<Colorize text={title} />
					</h1>
				</div>
			</div>
		</div>
	)
}
