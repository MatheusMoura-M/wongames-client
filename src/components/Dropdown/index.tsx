import { useState } from 'react'
import { ChildrenProps } from '@/utils/tests/helpers'

import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
} & ChildrenProps

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Dropdown
