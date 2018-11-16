import * as levenshtein from 'fast-levenshtein'

export interface IAnswer {
	answer: string
	index: number
	distance: number
}

function editDistance(a: string, b: string): number {
	return levenshtein.get(a.toLowerCase(), b.toLowerCase())
}

function answerReducer(
	guess: string,
	result: IAnswer[],
	variants: string[],
	index: number
): IAnswer[] {
	return [
		...result,
		...variants.map((variant: string) => ({
			answer: variant,
			index: index + 1,
			distance: editDistance(variant, guess)
		}))
	]
}

export function check(answers: string[][], guess: string): IAnswer | undefined {
	const close: IAnswer[] = answers
		.reduce(answerReducer.bind(undefined, guess), [] as IAnswer[])
		.filter((answer: IAnswer) => answer.distance < 2)

	if (close.length > 0) {
		return close[0]
	}

	return undefined
}
