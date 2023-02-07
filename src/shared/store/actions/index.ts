import { bindActionCreators } from 'redux';
import { todoSliceActions } from '../slices';
import { dispatch } from '..';

export const todoActions = bindActionCreators(todoSliceActions, dispatch);
