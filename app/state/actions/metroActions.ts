export enum ActionType {
    FETCH_METRO_START = 'fetch_metro_start',
    FETCH_METRO_SUCCESS = 'fetch_metro_success',
    FETCH_METRO_ERROR = 'fetch_metro_error',
  }
  
  interface FetchMetroStartAction {
    type: ActionType.FETCH_METRO_START;
  }
  
  interface FetchMetroSuccessAction {
    type: ActionType.FETCH_METRO_SUCCESS;
    payload: Adverts;
  }
  
  interface FetchMetroErrorAction {
    type: ActionType.FETCH_METRO_ERROR;
    payload: string;
  }
  
  export type MetroAction =
    | FetchMetroStartAction
    | FetchMetroSuccessAction
    | FetchMetroErrorAction;
  