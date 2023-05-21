import React, { useState } from 'react'

import { ArrowBackRounded, ArrowForwardRounded, CloseRounded } from '@mui/icons-material'
import { Box, MobileStepper, Modal } from '@mui/material'
import Image from 'next/image'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme, ThemeProvider } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { DEFAULT_BRAND_IMG_PROPS } from 'constants/defaultStaticImages'
import { Boarding } from 'services/models/boarding.model'

import messages from './onBoarding.messages'
import { OnBoardingProps } from './onBoarding.model'
import { OnBoardingGlobalStyles } from './onBoarding.styles'

const { colors } = theme

export const OnBoardingComponent = ({ boardingContent, onSubmit, onClose }: OnBoardingProps) => {
  const [open, setOpen] = useState(true)
  const [currentCardNumber, setCurrentCardNumber] = useState(1)
  const intl = useIntl()

  const cardsAmount = boardingContent.length

  const handleModal = () => {
    setOpen(!open)
    void onSubmit()
    void onClose()
  }

  const renderCardContent = (cardData: Boarding) => (
    <div className="card__data">
      <div className="card__image">
        <Image
          src={cardData.pictureUrl ?? DEFAULT_BRAND_IMG_PROPS.image}
          alt={cardData.title || DEFAULT_BRAND_IMG_PROPS.alt}
          width="300"
          height="300"
          layout="fill"
          placeholder="blur"
          blurDataURL={DEFAULT_BRAND_IMG_PROPS.image.blurDataURL}
        />
      </div>
      <div className="card__text">
        <Typography
          variant="h5"
          color={colors.primary[500]}
          weight="bold"
          className="card__text__capitalize">
          {cardData.title}
        </Typography>
        <Typography variant="s1" color={colors.neutrals[300]} className="card__text__capitalize">
          {cardData.description}
        </Typography>
      </div>
    </div>
  )

  return (
    <>
      <Modal open={open} sx={{ zIndex: 1290 }}>
        <Box className="onBoarding__modal">
          <ThemeProvider>
            <span className="onBoarding__close">
              <CloseRounded onClick={handleModal} fontSize="large" />
            </span>
            {renderCardContent(boardingContent[currentCardNumber - 1])}
            <MobileStepper
              variant="dots"
              steps={cardsAmount}
              activeStep={currentCardNumber - 1}
              className="onBoarding__stepper"
              backButton={
                currentCardNumber > 1 ? (
                  <Button
                    variant="white"
                    size="medium"
                    icon={<ArrowBackRounded />}
                    iconPosition="left"
                    className="button__back"
                    onClick={() => setCurrentCardNumber((prevStep) => prevStep - 1)}>
                    {intl.formatMessage(messages.buttons.back)}
                  </Button>
                ) : (
                  <div />
                )
              }
              nextButton={
                <Button
                  variant={currentCardNumber === cardsAmount ? 'contained' : 'white'}
                  size="medium"
                  icon={<ArrowForwardRounded />}
                  iconPosition="right"
                  className="button__next"
                  onClick={
                    currentCardNumber === cardsAmount
                      ? handleModal
                      : () => setCurrentCardNumber((prevStep) => prevStep + 1)
                  }>
                  {currentCardNumber === cardsAmount
                    ? intl.formatMessage(messages.buttons.start)
                    : intl.formatMessage(messages.buttons.next)}
                </Button>
              }
            />
          </ThemeProvider>
        </Box>
      </Modal>

      <style jsx global>
        {OnBoardingGlobalStyles}
      </style>
    </>
  )
}
