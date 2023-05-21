export type RenderTree = {
  id: string
  name: string
  children?: RenderTree[]
}

export const checkboxData: RenderTree = {
  id: '0',
  name: 'Biology',
  children: [
    {
      id: '1',
      name: 'Genetics',
    },
    {
      id: '2',
      name: 'Cells and tissues',
    },
    {
      id: '3',
      name: 'Earth and Space Sciences',
    },
    {
      id: '4',
      name: 'The Human Body',
    },
    {
      id: '5',
      name: 'Ecosystems',
      children: [
        {
          id: '6',
          name: 'Types of Ecosystems',
        },
        {
          id: '7',
          name: 'System equilibrium',
        },
        {
          id: '8',
          name: 'Tropic chains',
        },
        {
          id: '9',
          name: 'Environmental factors',
        },
      ],
    },
  ],
}
