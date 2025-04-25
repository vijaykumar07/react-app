

export interface CoreConcept {
  title: string;
  image: string;
  description: string;
}

export const CORE_CONCEPTS: CoreConcept[] = [
  {
    image: './src/assets/components.png',
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: './src/assets/jsx-ui.png',
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: './src/assets/config.png',
    title: 'config',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: './src/assets/state-mgmt.png',
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];