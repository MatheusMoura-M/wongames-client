import { Container } from '@/components/Container'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import { ChildrenProps } from '@/utils/tests/helpers'

import * as S from './styles'

const Base = ({ children }: ChildrenProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>

    <S.Content>{children}</S.Content>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
)

export default Base
