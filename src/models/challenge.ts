export type ChallengeType = 'body' | 'eye'

export default interface Challenge {
    type: ChallengeType
    description: string
    amount: number
}