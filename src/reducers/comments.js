import { SAVE_COMMENT } from '../../src/actions/types';

export default function(state =[], action){
	switch(action.type){
		case SAVE_COMMENT:
			//add all entries of state and a new entry
			return [...state, action.payload];
	}
	return state;
}
