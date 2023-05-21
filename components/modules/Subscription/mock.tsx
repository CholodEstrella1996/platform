import { SubscriptionProps } from './subscription.model'

export const subscriptionData: SubscriptionProps = {
  content: {
    details: {
      state: 'active',
      mount: 45.0,
      period: 'month',
      payment: 'PayPal',
      expiration: '2023-10-12',
    },
    products: {
      access: 1,
      items: [
        {
          id: 1,
          title: 'Verificación de la transgénesis de plantas',
          type: 'laboratorio',
        },
        {
          id: 2,
          title: 'Mejora genética de plantas',
          type: 'temática',
        },
        {
          id: 3,
          title: 'Análisis de calidad de agua y uso de macroinvertebrados como bioindicador',
          type: 'temática',
        },
        {
          id: 4,
          title: 'Ciencias Naturales - Básica Primaria',
          type: 'temática',
        },
      ],
    },
    billing: [
      {
        id: 1,
        number: '213-8345335-042899',
        date: '2021-01-30T00:00:00.000Z',
        price: 149.99,
        state: 'error',
      },
      {
        id: 2,
        number: '213-8345335-042899',
        date: '2022-02-27',
        price: 149.99,
        state: 'warning',
      },
      {
        id: 3,
        number: '213-8345335-042899',
        date: '2022-02-27',
        price: 149.99,
        state: 'success',
      },
      {
        id: 4,
        number: '213-8345335-042899',
        date: '2022-02-27',
        price: 149.99,
        state: 'success',
      },
      {
        id: 5,
        number: '213-8345335-042899',
        date: '2022-02-27',
        price: 149.99,
        state: 'success',
      },
    ],
  },
}
