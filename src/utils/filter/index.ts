import { ItemProps } from '@/components/ExploreSidebar'
import { ParsedUrlQueryInput } from 'querystring'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      const item = filterItems?.find((item) => item.name === key)
      const isCheckbox = item?.type === 'checkbox'

      // Verifica se a chave tem um underscore
      const [fieldName, operator] = key.split('_')

      if (operator) {
        // Se houver um operador (como lte, gte), transforma o valor em número
        const value = isNaN(Number(queryString[key]))
          ? queryString[key]
          : Number(queryString[key])

        obj[fieldName] = {
          ...(obj[fieldName] || {}),
          [operator]: value
        }
      } else if (isCheckbox) {
        // Nova lógica para múltiplos valores (checkbox, como platforms)
        const value = Array.isArray(queryString[key])
          ? queryString[key]
          : [queryString[key]]

        obj[fieldName] = {
          name: {
            in: value
          }
        }
      } else {
        // Caso contrário, mantém a lógica existente
        obj[key] = queryString[key]
      }
    })

  return obj
}

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key)
    const isCheckbox = item?.type === 'checkbox'
    const isArray = Array.isArray(queryString[key])

    obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key]
  })

  return obj
}
