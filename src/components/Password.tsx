import * as React from 'react'

import * as levenshtein from 'fast-levenshtein'

import Header from 'components/Header'
import { connect } from 'react-redux'

interface IProps {
	answers: string[]
}

interface IState {
	guess: string
	correct: string
	index: number
}

class Password extends React.PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = { guess: '', correct: '', index: -1 }

		this.handleGuess = this.handleGuess.bind(this)
	}

	public handleGuess(event: React.ChangeEvent<HTMLInputElement>): void {
		const guess: string = event.target.value
		const { answers }: IProps = this.props

		const distances: string[] = answers.filter(
			(answer: string) =>
				levenshtein.get(answer.toLowerCase(), guess.toLowerCase()) < 2
		)

		const correct: string = distances.length > 0 ? distances[0] : ''
		const index: number = answers.indexOf(correct) + 1

		this.setState({
			correct,
			guess,
			index
		})
	}

	public render(): JSX.Element {
		const { guess, correct, index }: IState = this.state

		return (
			<React.Fragment>
				<Header title="Пароль «рыба-меч»" />
				<div className="text-white">
					{guess && (
						<React.Fragment>
							{correct
								? `Знайшли відповідь №${index}: ${correct}!`
								: 'Спробуйте ще...'}
						</React.Fragment>
					)}
					{!correct &&
						guess.indexOf(' ') !== -1 && (
							<React.Fragment>
								Доречі, у правильній відповіді лише одне слово.
							</React.Fragment>
						)}
					<input value={guess} onChange={this.handleGuess} />
				</div>
			</React.Fragment>
		)
	}
}

export default connect((state: IProps) => state)(Password)
