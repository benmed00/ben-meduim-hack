export interface AppDataState<T>{
  dataState?: DataStateEnum,
  data?:T,
  errorMessage?:string
}
export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}
export enum ReactionEnum{
  LOVED,
  LIKED,
  REACTION
}
