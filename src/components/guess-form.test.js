import React from 'react';
import { shallow, mount, render } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {

    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the onSubmit callback when the form is submitted', () => {
    	const callback = jest.fn();
    	const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    	const value = 45;
    	wrapper.find('input[type="number"]').instance().value = value;
    	wrapper.simulate('submit');
    	expect(callback).toHaveBeenCalledWith(value.toString());
    });

    it('Should reset input area when form is submitted', () => {
    	const wrapper = mount(<GuessForm />);
    	const input = wrapper.find('input[type="number"]');
    	input.instance().value=10;
    	wrapper.simulate('submit');
    	expect(input.instance().value).toEqual('');
    });

});