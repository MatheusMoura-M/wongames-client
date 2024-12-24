import { forwardRef } from 'react'
import SlickSlider, { CustomArrowProps, Settings } from 'react-slick'
import * as S from './styles'

export type SliderSettings = Settings
export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}
interface CustomArrowWithChildrenProps extends CustomArrowProps {
  children?: React.ReactNode;
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {prevArrow, nextArrow, ...rest } = settings;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const SlickArrowFix: React.FC<CustomArrowWithChildrenProps> = ({currentSlide, slideCount, children, ...props}) => (
    <div {...props}>{children}</div>
  );

  return (
    <S.Wrapper>
      <SlickSlider
        ref={ref}
        prevArrow={
          <SlickArrowFix>
            {prevArrow}
          </SlickArrowFix>
        }
        nextArrow={
          <SlickArrowFix>
            {nextArrow}
          </SlickArrowFix>
        }
        {...rest}
      >
        {children}
      </SlickSlider>
    </S.Wrapper>
  )
}

export default forwardRef(Slider)
