import { renderComponent, expect } from "../test_helper";
//what we want to test
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {

	let component;

	beforeEach(() =>{
		const props ={comments:['new comment', 'other new comment'] };
		//can pass in props
		component = renderComponent(CommentList, null, props);
	});

	it('component has classname "comment-list"', ()=>{
		expect(component).to.have.class('comment-list');
	});

	it('shows an LI for each comment', ()=>{

		expect(component.find('li').length).to.equal(2);
	});


	it('shows each comment that is provided', ()=>{
		expect(component).to.contain('new comment');
		expect(component).to.contain('other new comment');
	});

});
