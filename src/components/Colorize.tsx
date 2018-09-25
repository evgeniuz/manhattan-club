import * as React from 'react'
import * as uuidv4 from 'uuid'

export interface IProps {
	text: string
}

type Color = string

const colorChoices: Color[] = ['violet', 'blue', 'yellow', 'red']

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

class Colorize extends React.PureComponent<IProps> {
	public render(): JSX.Element {
		const { text }: IProps = this.props

		const getColor: IterableIterator<Color> = colorGenerator()

		return (
			<React.Fragment>
				{text.split('').map((letter: string) => (
					<span key={uuidv4()} className={`color-${getColor.next().value}`}>
						{letter}
					</span>
				))}
			</React.Fragment>
		)
	}
}

export default Colorize
