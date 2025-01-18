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

      // Verifica se a chave tem um underscore
      const [fieldName, operator] = key.split('_')

      console.log('FIELD', fieldName)
      console.log('OPERATOR', operator)
      console.log('ISCHECKBOX', isCheckbox)

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
  let sort: string | string[] | undefined

  // console.log('QUERYAFTER', queryString)

  Object.keys(queryString).forEach((key) => {
    const value = queryString[key]
    if (key === 'sort') {
      if (typeof value === 'string' || Array.isArray(value)) {
        sort = value // Garante que o valor seja do tipo string | string[]
      }
    } else {
      const item = filterItems?.find((filterItem) => filterItem.name === key)

      const isCheckbox = item?.type === 'checkbox'
      const isArray = Array.isArray(queryString[key])

      filters[key] =
        !isArray && isCheckbox ? [queryString[key]] : queryString[key]
    }
  })

  console.log('**********************')

  const queryStringified = qs.stringify(
    {
      filters: Object.entries(filters).reduce(
        (acc, [key, value]) => {
          const match = key.match(/\[\$(\w+)\]$/) // Captura o sufixo (como 'lte' ou 'gte')
          const operator = match ? `$${match[1]}` : '$in'

          if (key.startsWith('filters[')) {
            console.log('1111111111')
            // console.log('KEY', key)
            // console.log('VALUE', value)

            const cleanKey = key.replace(/^filters\[(.+)\]$/, '$1') // Remove 'filters[' e ']'
            const keys = cleanKey.split('][') // Divida por '][' para tratar partes separadas

            const mainKey = keys[0] // O primeiro valor antes dos colchetes

            if (!acc[mainKey]) {
              acc[mainKey] = {} // Cria o objeto para o campo principal (ex: 'platforms')
            }

            // Quando o campo for 'platforms', queremos agrupar 'name' com os valores dentro do operador
            if (mainKey === 'platforms') {
              const nameKey = keys[1] // 'name', que está dentro de 'platforms'

              if (!acc[mainKey][nameKey]) {
                acc[mainKey][nameKey] = {} // Cria o objeto para 'name'
              }

              // Se o operador for $in, cria o array com os valores
              if (operator === '$in') {
                if (!acc[mainKey][nameKey][operator]) {
                  acc[mainKey][nameKey][operator] = []
                }
                acc[mainKey][nameKey][operator].push(value)
              }
            } else {
              // Para outros campos como 'price', 'rating', etc.
              acc[mainKey] = acc[mainKey] || {}

              // Se houver operador, cria a estrutura com o operador
              if (operator) {
                acc[mainKey][operator] = value
              } else {
                // Se não houver operador, apenas atribui o valor direto
                acc[mainKey] = value
              }
            }
          } else if (key.startsWith('filters')) {
            console.log('222222222222222')

            Object.assign(acc, value)
          } else {
            console.log('333333333333333')
            acc[key] = acc[key] || {}

            if (key === 'platforms') {
              acc[key].name = {
                ...acc[key].name,
                [operator]: value
              }
            } else {
              acc[key][operator] = value
            }
          }

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

  return queryStringified
  // return 'filters[price][$lte]=0&filters[platforms][name][$in][0]=windows&filters[platforms][name][$in][1]=linux'
}
