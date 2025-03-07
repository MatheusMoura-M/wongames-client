import { useRouter } from 'next/router'
import { Container } from '@/components/Container'
import Heading from '@/components/Heading'
import ProfileMenu from '@/components/ProfileMenu'
import Base from '@/templates/Base'
import { ChildrenProps } from '@/utils/tests/helpers'

import * as S from './styles'

const Profile = ({ children }: ChildrenProps) => {
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Profile
