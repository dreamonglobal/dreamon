// NGRX
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppState { }

export const appReducers: ActionReducerMap<AppState> = { router: routerReducer };

export const metaReducers: Array<MetaReducer<AppState>> = [];
