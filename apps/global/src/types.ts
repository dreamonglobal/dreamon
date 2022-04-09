export type Musician =
  | 'Zac Howard'
  | 'Emily Howard'
  | 'Lucas Gray'
  | 'Lilli Gray'
  | 'Blake Reynolds'
  | 'Derek Spencer'

export type Speaker =
  | 'Ty Watson'
  | 'Ashley Powell'
  | 'Ben Swartz'
  | 'Hanna Swartz'
  | 'Rob Kennedy'

export type Board =
  | 'Scott Smith'
  | 'Landon Neuman'
  | 'Judy Zircher'
  | 'John Peak'
  | 'Dan Lee'
  | 'Jordan Powell'

export type Category = 'Team' | 'Events' | 'Musician' | 'Speaker' | 'Films' | 'Board'

export type Locale = 'en' | 'es' | 'pt'

export type Socials = {
  facebook?: string
  twitter?: string
  instagram?: string
  youtube?: string
  spotify?: string
  vimeo?: string
}

export type Frontmatter = {
  path: string
  name: string
  photo: string
  videos: string[]
  title: string
  date: string
  location: string
  buy: string
  category: Category
  order: number
  author: Speaker
  locale: Locale
} & Socials

export type MarkdownRemark = {
  id?: number
  frontmatter: Frontmatter
  html: string
  allMarkdownRemark: AllMarkdownRemark
}
export type Data = {
  markdownRemark: MarkdownRemark
}

export type Node = Data

export type Edge = {
  node: MarkdownRemark
}

export type AllMarkdownRemark = {
  nodes: MarkdownRemark[]
  edges: Edge[]
}

// TRANSLATIONS
export type FeatureTranslations = { [key: string]: string }

export type Translations = {
  [key: string]: { [key: string]: string }
}
