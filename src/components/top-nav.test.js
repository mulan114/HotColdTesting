import React from 'react';
import { shallow, mount, render } from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {

    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should fire onRestartGame callback when link clicked', () => {
    	const callback = jest.fn();
    	const wrapper = mount(<TopNav onRestartGame={callback} />);
    	const link = wrapper.find('.new');
    	link.simulate('click', {
    		preventDefault() {}
    	});
    	expect(callback).toHaveBeenCalled();
    });

        it('Should fire onGenerateAuralUpdate callback when link clicked', () => {
    	const callback = jest.fn();
    	const wrapper = mount(<TopNav onGenerateAuralUpdate={callback} />);
    	const link = wrapper.find('.status-link');
    	link.simulate('click', {
    		preventDefault() {}    		
    	});
    	expect(callback).toHaveBeenCalled();
    });

});