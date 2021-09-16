import produce, {Draft, finishDraft} from 'immer';
import {MetroAction, ActionType} from '../actions/metroActions';

export interface MetroState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: MetroState = {
  loading: false,
  error: null,
  data: [],
};

export const reducer = produce(
  (draft: Draft<AdvertsState>, action: MetroAction) => {
    switch (action.type) {
      case ActionType.FETCH_METRO_START: {
        draft.loading = true;
        break;
      }
      case ActionType.FETCH_METRO_SUCCESS: {
        draft.loading = false;
        draft.error = null;
        draft.data = action.payload;
        break;
      }
      case ActionType.FETCH_METRO_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }
    }
  },
  initialState,
);
