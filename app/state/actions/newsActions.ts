export enum ActionType {
  FETCH_NEWS_START = 'fetch_news_start',
  FETCH_NEWS_SUCCESS = 'fetch_news_success',
  FETCH_NEWS_ERROR = 'fetch_news_error',
}

interface FetchNewsStartAction {
  type: ActionType.FETCH_NEWS_START;
}

interface FetchNewsSuccessAction {
  type: ActionType.FETCH_NEWS_SUCCESS;
  payload: any;
}

interface FetchNewsErrorAction {
  type: ActionType.FETCH_NEWS_ERROR;
  payload: string;
}

export type AdvertsAction =
  | FetchNewsStartAction
  | FetchNewsSuccessAction
  | FetchNewsErrorAction
