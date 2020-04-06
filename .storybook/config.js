import { configure } from '@storybook/angular';

function loadStories() {
  require('../src/stories/getting-started.stories.ts');
}

configure(loadStories, module);
