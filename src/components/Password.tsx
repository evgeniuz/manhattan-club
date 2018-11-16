import * as React from 'react'

import { connect } from 'react-redux'

import { check, IAnswer } from 'checker'

import Header from 'components/Header'

interface IProps {
	answers: string[][]
}

interface IState {
	guess: string
}

class Password extends React.PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props)

		this.state = { guess: '' }

		this.handleGuess = this.handleGuess.bind(this)
	}

	public handleGuess(event: React.ChangeEvent<HTMLInputElement>): void {
		const guess: string = event.target.value

		this.setState({ guess })
	}

	notification(text: string, type: string): JSX.Element {
		return <div className={`alert alert-${type}`}>{text}</div>
	}

	status(guess: string): JSX.Element {
		if (!guess) {
			return this.notification('Введіть відповідь нижче', 'info')
		}

		const { answers }: IProps = this.props
		const answer: IAnswer | undefined = check(answers, guess)

		if (answer) {
			return this.notification(
				`Знайшли відповідь №${answer.index}: ${answer.answer}!`,
				'success'
			)
		}

		return this.notification(
			`Спробуйте ще...${
				guess.indexOf(' ') !== -1
					? ' Доречі, у правильній відповіді лише одне слово.'
					: ''
			}`,
			'warning'
		)
	}

	public render(): JSX.Element {
		const { guess }: IState = this.state

		return (
			<React.Fragment>
				<Header title="Перевірка відповіді" />
				<div className="container text-white text-center">
					{this.status(guess)}
					<input
						className="form-control"
						placeholder="Введіть відповідь"
						value={guess}
						onChange={this.handleGuess}
					/>
				</div>
			</React.Fragment>
		)
	}
}

export default connect((state: IProps) => state)(Password)
