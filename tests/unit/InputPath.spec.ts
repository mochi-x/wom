import { shallowMount } from '@vue/test-utils';
import InputPath from '@/components/InputPath.vue';

describe('InputPath.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(InputPath, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
