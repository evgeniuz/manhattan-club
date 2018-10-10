import * as React from 'react'

import * as uuidv4 from 'uuid'

type Color = string

const colorChoices: Color[] = ['#b43960', '#ffb30f', '#009b95', '#f42e14']

function randomColor(): Color {
	return colorChoices[Math.floor(Math.random() * colorChoices.length)]
}

function* colorGenerator(): IterableIterator<Color> {
	let color: Color = randomColor()

	while (true) {
		const previousColor: Color = color

		yield color

		do {
			color = randomColor()
		} while (color === previousColor)
	}
}

export interface IProps {
	text: string
}

export default class Colorize extends React.PureComponent<IProps> {
	public render(): JSX.Element {
		const { text }: IProps = this.props

		const getColor: IterableIterator<Color> = colorGenerator()

		return (
			<React.Fragment>
				{text.split('').map(
					(letter: string): JSX.Element => (
						<span key={uuidv4()} style={{ color: getColor.next().value }}>
							{letter}
						</span>
					)
				)}
			</React.Fragment>
		)
	}
}
