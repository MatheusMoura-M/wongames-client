import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import Heading from '@/components/Heading'
import Radio from '@/components/Radio'
import { Close } from '@styled-icons/material-outlined/Close'
import { FilterList } from '@styled-icons/material-outlined/FilterList'
import { ParsedUrlQueryInput } from 'querystring'
import { useEffect, useState } from 'react'

import * as S from './styles'
import xor from 'lodash.xor'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

type Values = ParsedUrlQueryInput

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    onFilter(values)
    // this method comes from another template
    // that we don't have access
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  const handleRadio = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }))
  }

  const handleCheckbox = (name: string, value: string) => {
    const currentList = (values[name] as []) || []
    setValues((s) => ({ ...s, [name]: xor(currentList, [value]) }))
  }

  const handleFilterMenu = () => {
    onFilter(values)
    setIsOpen(false)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />

      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />

        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={(values[item.name] as string[])?.includes(
                    field.name
                  )}
                  onCheck={() => handleCheckbox(item.name, field.name)}
                />
              ))}

            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  value={field.name}
                  name={item.name}
                  label={field.label}
                  labelFor={field.name}
                  defaultChecked={
                    String(field.name) === String(values[item.name])
                  }
                  onChange={() => handleRadio(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilterMenu}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar
