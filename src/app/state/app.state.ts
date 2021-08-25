import { authReducer } from '../auth/state/auth.reducer';
import { AUTH_STATE_NAME } from '../auth/state/auth.selector';
import { sharedReducer } from '../shared/state/shared.reducer';
import { SHARED_STATE_NAME } from '../shared/state/shared.selector';

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
  [AUTH_STATE_NAME]: authReducer,
};
