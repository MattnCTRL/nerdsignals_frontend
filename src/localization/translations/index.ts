import en from './en.json'

const translations = {
  en,
}

const result = Object.fromEntries(
  Object.entries(translations).map(([keyof, lng]) => {
    const translation = lng.reduce<Record<string, string>>((acc, val) => {
      acc[val.term] = val.definition
      return acc
    }, {})
    return [keyof, { translation }]
  }),
)

export default result
