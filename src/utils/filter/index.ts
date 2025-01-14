import { ItemProps } from '@/components/ExploreSidebar'
import { ParsedUrlQueryInput } from 'querystring'
import qs from 'qs'

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

      obj[key] = !isCheckbox
        ? queryString[key]
        : { name_contains: queryString[key] }
    })

  console.log('WHERE_ONE', obj)
  return obj
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cleanObject = (obj: any): any => {
  if (typeof obj !== 'object' || obj === null) return obj

  if (Array.isArray(obj)) {
    return obj.map((item) => cleanObject(item))
  }

  return Object.keys(obj).reduce(
    (acc, key) => {
      const newKey = key.startsWith('$') ? key.slice(1) : key // Remove o "$" se estiver no início
      const value = cleanObject(obj[key]) // Recursão para processar valores

      // Verifica se é `price.lte` e converte para número, se necessário
      if (newKey === 'price' && typeof value === 'object' && 'lte' in value) {
        acc[newKey] = {
          ...value,
          lte: parseFloat(value.lte) // Converte para número
        }
      } else {
        acc[newKey] = value // Mantém o valor processado
      }

      return acc
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {} as Record<string, any>
  )
}

export const parseQueryStringToWhereSecond = ({
  queryString
  // filterItems
}: ParseArgs) => {
  const obj = qs.parse(queryString as Record<string, string>)
  const cleanedObj = cleanObject(obj)
  console.log('WHERE_SECOND', cleanedObj)

  return cleanedObj.filters
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

  console.log('FILTER_ONE', obj)

  return obj
}

export const parseQueryStringToFilterSecond = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filters: Record<string, any> = {}
  let sort: string | string[] | undefined;

  Object.keys(queryString)
    // .filter((item) => item !== 'sort')
    .forEach((key) => {
      if (key === 'sort') {
        const value = queryString[key];
        if (typeof value === 'string' || Array.isArray(value)) {
          sort = value; // Garante que o valor seja do tipo string | string[]
        }
      } else {
        const item = filterItems?.find((filterItem) => filterItem.name === key)
        const isCheckbox = item?.type === 'checkbox'
        const isArray = Array.isArray(queryString[key])

        filters[key] =
          !isArray && isCheckbox ? [queryString[key]] : queryString[key]
      }
    })

  const queryStringified = qs.stringify(
    {
      filters: Object.entries(filters).reduce(
        (acc, [key, value]) => {
          const match = key.match(/_(\w+)$/) // Captura o sufixo (como 'lte' ou 'gte')
          const fieldName = match ? key.replace(/_\w+$/, '') : key // Remove o sufixo do nome do campo
          const operator = match ? `$${match[1]}` : '$in'

          // console.log('ACC', acc)
          // console.log('KEY', key)
          // console.log('VALUE', value)
          // console.log('FIELDNAME', fieldName)
          // console.log('OPERATOR', operator)

          acc[fieldName] =
            key === 'platforms'
              ? { ...acc[fieldName], name: { [operator]: value } }
              : { ...acc[fieldName], [operator]: value }

          console.log('ACC_AFTER', acc)

          return acc
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {} as Record<string, any>
      ),
      ...(sort && { sort })
    },
    { encodeValuesOnly: true } // Configuração para evitar codificação excessiva
  )
  console.log('FILTER_SECOND', queryStringified)
  // console.log("FILTER_PARSED", qs.parse(queryStringified))

  return queryStringified
}
