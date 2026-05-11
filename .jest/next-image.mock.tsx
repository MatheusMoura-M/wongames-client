/* eslint-disable */
import { StaticImageImport } from '@/components/GameItem/test'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, fill, priority, ...props }: StaticImageImport) => (
    <img role="img" src={src} alt={alt} {...props} />
  )
}))
