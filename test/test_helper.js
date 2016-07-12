//http://chaijs.com/api/bdd/

//emulates the dom in the command line
import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDom from 'react-dom';
import chai, {expect} from 'chai'; //http://chaijs.com/api/bdd/

import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery'; //https://github.com/chaijs/chai-jquery

//assigning the dom's document
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

//tells jquery to look at the dom created by jsdom
const $ = _$(global.window);

//renderComponent will take a component class, render it,
//wrap its html in a jQuery element
//2nd argument props - place directly on component class
//3rd argument state - any application level state to be injected into redux store
function renderComponent(ComponentClass, props, state){
  //rendered passed in component
  const componentInstance = TestUtils.renderIntoDocument(
    //if state passed in will be the initial state
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
    );
  //produces html wrapped in jQuery element
  return $(ReactDom.findDOMNode(componentInstance));
}

//add a function 'simulate' to jQuery
$.fn.simulate = function(eventName, value){
  //if there is a value set the value of element to the passed in value
  if(value){
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

//extends the jquery library
chaiJquery(chai, chai.util, $);

export {renderComponent, expect};
