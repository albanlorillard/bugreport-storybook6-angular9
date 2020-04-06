import {storiesOf} from '@storybook/angular';

storiesOf('Introduction', module)
  .add('What is this for', () => ({
    template: `
      <h1>Introduction</h1>
      <p>Hello world!</p>    `
  }));
