import {ActionType} from "../action-types"

//Action object 
interface DepositAction{
    type:ActionType.DEPOSIT
    payload:number
}
interface WithdrawAction{
    type:ActionType.WITHDRAW
    payload:number
}
interface BankruptAction{
    type:ActionType.BANKRUPT
}

export type Action = DepositAction | WithdrawAction | BankruptAction

export{}

