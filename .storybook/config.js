import { addParameters, configure } from '@storybook/react'

function loadStories() {
  require('../src/stories')
}

addParameters({
  backgrounds: [
    { name: 'Light', value: '#cdd6e0', default: true },
    { name: 'Dark', value: '#191f29' },
  ],
})

configure(loadStories, module)
