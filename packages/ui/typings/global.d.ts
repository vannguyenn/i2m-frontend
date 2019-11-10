type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Kind = 'default' | 'primary' | 'secondary' | 'negative'

declare namespace NodeJS {
  interface Process {
    browser: boolean
  }
}
