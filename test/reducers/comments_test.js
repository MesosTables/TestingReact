import { expect } from "../test_helper";
//what we want to test
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
	it('handles action with unknown type', () =>{
		//don't pass in with state or action
		//expect what is returned to be an Array
		expect(commentReducer(undefined, {})).to.be.instanceof(Array);
		//a deep equal to see if it returns an empty array
		expect(commentReducer(undefined, {})).to.eql([]);
	});
	it('handles action with type of SAVE_COMMENT', () =>{
		const action = { type: SAVE_COMMENT, payload: 'new comment'};
		expect(commentReducer([],action)).to.eql(['new comment']);
	});

})
