import * as levenshtein from 'fast-levenshtein'

export interface IAnswer {
	answer: string
	index: number
	distance: number
}

function editDistance(a: string, b: string): number {
	return levenshtein.get(a.toLowerCase(), b.toLowerCase())
}

export function check(answers: string[], guess: string): IAnswer | undefined {
	const close: string[] = answers.filter(
		(answer: string) => editDistance(answer, guess) < 2
	)

	if (close.length > 0) {
		const answer: string = close[0]
		const index: number = answers.indexOf(answer) + 1
		const distance: number = editDistance(answer, guess)

		return { answer, index, distance }
	}

	return undefined
}
