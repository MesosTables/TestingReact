//purpose of file to test component app.js
//make sure the div renders properly

import { renderComponent, expect } from "../test_helper";
//what we want to test
import App from '../../src/components/app';

//string passed into describe and it only used in the report
// this produces

//use describe to group together similar tests
describe('App', () => {
	
	// Use 'it' to test a single 'attribute' of a target
	// it('shows the correct text', ()=>{
	// 	create an instance of App
	// 	const component = renderComponent(App);
	// 	//Use 'expect' to make a single 'assertion' about a target
	// 	expect(component).to.contain('React simple starter');

	let component;

	beforeEach(() =>{
		component = renderComponent(App);
	});

	it('shows a comment box', ()=> {
		//test if html element has a comment-box class
		expect(component.find('.comment-box')).to.exist;
	});

	it('shows a comment list', ()=> {
		expect(component.find('.comment-list')).to.exist;
	});

});


