import leven from 'leven'

export interface IAnswer {
	answer: string
	index: number
}

export function check(answers: string[], guess: string): IAnswer | undefined {
	const close: string[] = answers.filter(
		(answer: string) => leven(answer.toLowerCase(), guess.toLowerCase()) < 2
	)

	if (close.length > 0) {
		const answer: string = close[0]
		const index: number = answers.indexOf(answer) + 1

		return { answer, index }
	}

	return undefined
}
