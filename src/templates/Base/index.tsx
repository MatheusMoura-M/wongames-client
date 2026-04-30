import { Container } from '@/components/Container'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import { useSession } from 'next-auth/react'
import * as S from './styles'

const Base = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession()

  return (
    <S.Wrapper>
      <Container>
        <Menu username={session?.user?.name} status={status} />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
