import produce, {Draft, finishDraft} from 'immer';
import {AdvertsAction, ActionType} from '../actions/newsActions';

export interface AdvertsState {
  loading: boolean;
  error: string | null;
  news: any;
}

const initialState: AdvertsState = {
  loading: false,
  error: null,
  news: {},
};

export const reducer = produce(
  (draft: Draft<AdvertsState>, action: AdvertsAction) => {
    switch (action.type) {
      case ActionType.FETCH_NEWS_START: {
        draft.loading = true;
        break;
      }
      case ActionType.FETCH_NEWS_SUCCESS: {
        draft.loading = false;
        draft.error = null;
        draft.news = action.payload;
        break;
      }
      case ActionType.FETCH_NEWS_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }
    }
  },
  initialState,
);
