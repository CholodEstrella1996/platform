type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 's1'
  | 's2'
  | 'p1'
  | 'p2'
  | 'c1'
  | 'c2'
  | 'label'

type Component = Variant | 'div' | 'span'

type Weight = 'bold' | 'semibold' | 'regular'

export type { Variant, Component, Weight }
