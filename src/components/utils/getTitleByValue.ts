import { FILTERS } from '../modules/HomeModule/constants'

export const getTitleByValue = (value: string): string | undefined => {
  const filter = FILTERS.find((button) => button.value === value)
  return filter ? filter.title : undefined
}
