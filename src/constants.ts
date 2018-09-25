export const SELECT_TEAM: string = 'SELECT_TEAM'
export type SELECT_TEAM = typeof SELECT_TEAM

export const UPDATE_SCORES: string = 'UPDATE_SCORES'
export type UPDATE_SCORES = typeof UPDATE_SCORES

export interface IAchievement {
	id: string
	name: string
	description: string
}

interface ITeamRaw {
	name: string
	achievementIDs: string[]
}

export interface ITeam extends ITeamRaw {
	achievements: IAchievement[]
}

export interface IState {
	teams: ITeam[]
	selectedTeam: ITeam | null
	scoresHTML: string
}

/* tslint:disable:object-literal-sort-keys */
const ACHIEVEMENTS: IAchievement[] = [
	{
		id: 'combo',
		name: 'Комбо',
		description:
			'Посетили все игры Manhattan Club в сезоне (эта медалька потеряется при первом пропуске).'
	},
	{
		id: 'fullhouse',
		name: 'Фулл хаус',
		description: 'Сыграли командой в 8 человек.'
	},
	{
		id: 'specialists',
		name: 'Узкие специалисты',
		description:
			'Ответили на вопрос, на который не ответила ни одна другая команда.'
	},
	{
		id: 'uneducated',
		name: 'Это мы не проходили',
		description:
			'Не ответили на вопрос, на который ответили все остальные команды.'
	},
	{
		id: 'hattrick',
		name: 'Хэт трик',
		description: 'Три раунда подряд получили 10/10 баллов.'
	},
	{
		id: 'theme',
		name: 'В теме',
		description: 'Пришли в тематических костюмах.'
	},
	{
		id: 'first',
		name: 'Тут как тут',
		description: 'Первыми зарегистрировались на игру.'
	},
	{
		id: 'unlucky',
		name: 'Не судьба',
		description: 'Не выиграли приз, который написали.'
	},
	{
		id: 'masters',
		name: 'Ученик превзошел учителя',
		description: 'Обыграли команду Manhattan Club на другом квизе.'
	},
	{
		id: 'diehard10',
		name: 'Ковбои',
		description: '10/10 в "Крепком орешке"'
	},
	{
		id: 'music10',
		name: 'Музыканты',
		description: '10/10 в "Ла-ла-ленде"'
	},
	{
		id: 'letter10',
		name: 'Почтальоны',
		description: '10/10 в "Вам письмо"'
	},
	{
		id: 'mind10',
		name: 'Шизофреники :)',
		description: '10/10 в "Играх разума"'
	},
	{
		id: 'spotlight10',
		name: 'Кинокритики',
		description: '10/10 во "В центре внимания"'
	},
	{
		id: 'prestige10',
		name: 'Иллюзионисты',
		description: '10/10 в "Престиже"'
	}
]

const TEAMS: ITeamRaw[] = [
	{
		name: 'Amigos',
		achievementIDs: ['combo', 'fullhouse', 'diehard10']
	},
	{
		name: 'Carpe Diem',
		achievementIDs: ['combo', 'unlucky']
	},
	{
		name: 'Excalibur',
		achievementIDs: ['combo', 'theme', 'fullhouse', 'music10']
	},
	{
		name: 'PHOS',
		achievementIDs: ['combo', 'music10']
	},
	{
		name: 'Yes!',
		achievementIDs: ['combo', 'diehard10', 'music10']
	},
	{
		name: 'Башкавитые',
		achievementIDs: [
			'combo',
			'hattrick',
			'first',
			'diehard10',
			'letter10',
			'spotlight10',
			'music10'
		]
	},
	{
		name: 'БОССЫ',
		achievementIDs: ['combo', 'unlucky', 'music10']
	},
	{
		name: 'ВЖУХ',
		achievementIDs: ['combo', 'music10']
	},
	{
		name: 'ДаитаннаЭби',
		achievementIDs: ['combo']
	},
	{
		name: 'Де Лумино',
		achievementIDs: ['combo', 'music10']
	},
	{
		name: 'Дети Дамблдора',
		achievementIDs: ['combo', 'fullhouse', 'unlucky']
	},
	{
		name: 'Ламы в шляпах',
		achievementIDs: ['combo', 'diehard10', 'spotlight10', 'music10']
	},
	{
		name: 'Мандрагора',
		achievementIDs: ['combo', 'unlucky', 'music10']
	},
	{
		name: 'Мы есть Грут',
		achievementIDs: ['combo', 'first', 'music10']
	},
	{
		name: 'Незримый Университет',
		achievementIDs: ['combo', 'fullhouse', 'spotlight10', 'music10']
	},
	{
		name: 'Оранжевый Ёскьюватн',
		achievementIDs: ['combo']
	},
	{
		name: 'Пингви и Ко',
		achievementIDs: ['combo', 'music10']
	},
	{
		name: 'Северный Крот',
		achievementIDs: ['combo', 'music10']
	},
	{
		name: 'Сталактиты',
		achievementIDs: ['combo', 'fullhouse', 'music10']
	},
	{
		name: 'Таки Да',
		achievementIDs: ['combo', 'specialists', 'letter10']
	},
	{
		name: 'УниКумы',
		achievementIDs: [
			'combo',
			'theme',
			'fullhouse',
			'diehard10',
			'mind10',
			'prestige10',
			'music10'
		]
	},
	{
		name: 'Усы Бурды',
		achievementIDs: ['combo', 'music10']
	},
	{
		name: 'Франкотики',
		achievementIDs: ['combo']
	},
	{
		name: 'Хипстера Бозон',
		achievementIDs: ['combo', 'diehard10', 'music10']
	}
]
/* tslint:enable */

export { TEAMS, ACHIEVEMENTS }
