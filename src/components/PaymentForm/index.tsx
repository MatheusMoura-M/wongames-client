import { useCart } from '@/hooks/use-cart'
import { Session } from 'next-auth'
import React, { useEffect, useState } from 'react'

import { createPaymentIntent } from '@/utils/stripe/methods'
import { CardElement } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'

import { ErrorOutline } from '@styled-icons/material-outlined/ErrorOutline'
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'

import Button from '@/components/Button'
import Heading from '@/components/Heading'
import { FormLoading } from '../Form'

import * as S from './styles'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()

  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (!items.length || !session?.jwt) return

      try {
        // bater na API /orders/create-payment-intent
        const data = await createPaymentIntent({
          items,
          token: session.jwt
        })

        // se eu receber freeGames: true => setFreeGames
        // faço o fluxo de jogo gratuito
        if (data.freeGames) {
          setFreeGames(true)
          return
        }

        if (data.error) {
          // se eu receber um erro
          // setError
          setError(data.error?.message ? data.error.message : '')
          return
        } else {
          // senão o paymentIntent foi válido
          // setClientSecret
          setFreeGames(false)
          setClientSecret(data.client_secret)
        }
      } catch (err) {
        console.error('Erro ao criar payment intent:', err)
        setError('Erro inesperado ao processar pagamento')
      }
    }

    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" size="small" lineBottom>
            Payment
          </Heading>

          {freeGames ? (
            <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '16px'
                  }
                }
              }}
              onChange={handleChange}
            />
          )}

          {error && (
            <S.Error>
              <ErrorOutline size={20} style={{ marginRight: '4px' }} />
              {error}
            </S.Error>
          )}
        </S.Body>

        <S.Footer>
          <Button as="a" fullWidth minimal>
            Continue shopping
          </Button>

          <Button
            fullWidth
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={!freeGames && (disabled || !!error)}
          >
            {!loading && <span>Buy now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
