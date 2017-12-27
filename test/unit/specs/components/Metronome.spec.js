import { mount, testComponent } from '../../helpers';
import Metronome from '@/components/Metronome.vue';

const testComponents = {
  Display: testComponent('Display'),
  TimeSignatures: testComponent('TimeSignatures'),
  'metronome-svg': testComponent('MetronomeSVG')
}

describe('Metronome.vue', () => {
  describe('rendering of child components', () => {
    const component = mount(
      Metronome,
      { metronomeOn: false },
      testComponents
    );

    const textContent = component.$el.textContent;

    it('renders the Display component', () => {
      expect(textContent).toContain('test Display');
    });

    it('renders the TimeSignatures component', () => {
      expect(textContent).toContain('test TimeSignatures');
    });

    it('renders the MetronomeSVG component', () => {
      expect(textContent).toContain('test MetronomeSVG');
    });
  });

  describe('state', () => {
    describe('metronomeOn', () => {
      describe('false', () => {
        const component = mount(
          Metronome,
          { metronomeOn: false },
          testComponents
        );

        const textContent = component.$el.textContent;

        it('contains the correct button text', () => {
          expect(textContent).toContain('START');
        });
      });

      describe('true', () => {
        const component = mount(
          Metronome,
          { metronomeOn: true },
          testComponents
        );

        const textContent = component.$el.textContent;

        it('contains the correct button text', () => {
          expect(textContent).toContain('STOP');
        });
      });
    });
  });
});
