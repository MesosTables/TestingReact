import { renderComponent, expect } from "../test_helper";
import CommentBox from '../../src/components/comment_box';

describe ('CommentBox', () => {
	//declare the variable
	let component;

	beforeEach(() =>{
		//set the component variable
		//in this case this is the form element
		component = renderComponent(CommentBox);
	});

	it('component has classname "comment-box"', ()=>{
		expect(component).to.have.class('comment-box');
	});

	it('it has a text area', ()=>{
		expect(component.find('textarea')).to.exist;
	});

	it('it has a button', ()=>{
		expect(component.find('button')).to.exist;
	});

	describe('entering some text',()=>{

		beforeEach(() =>{
			//find the textarea and simulate a change event for the text
			//to 'new comment'
			component.find('textarea').simulate('change', 'new comment');
		});

		it('shows text that is entered', ()=>{
			expect(component.find('textarea')).to.have.value('new comment');
		});

		it('when submitted, clears the input',()=>{
			//component is the form 
			component.simulate('submit');
			expect(component.find('textarea')).to.have.value('');
		});

	});
	
});
