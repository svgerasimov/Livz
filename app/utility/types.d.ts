import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {RootState} from '../state/reducers';

/**
 * UTILS
 */
type Record<T = any> = {[key: string]: ReadonlyArray<T>};

export type IconProps = {
  color?: string;
  width?: number;
  height?: number;
};

export type ActionCreator<T, A> = T extends (...args: any[]) => any
  ? ReturnType<T> extends A
    ? T
    : never
  : never;

export type MapKeysToReadonlyArrayValues<
  P extends string | number | symbol,
  T extends Record
> = {
  [R in P]: T[keyof T][number];
};

export type ExtractReadonlyArrayValues<T extends Record> = T[keyof T][number];

export type PickerSelectKeys = 'label' | 'value';

export type AppThunk = ThunkAction<void, RootState, unknown, Action<unknown>>;
export type ValueOf<T> = T[keyof T];
export type KeysOf<T> = keyof T;
