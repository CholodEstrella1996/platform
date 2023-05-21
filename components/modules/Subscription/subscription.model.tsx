type SubscriptionProps = {
  content: {
    details: Details
    products: Products
    billing: Billing[]
  }
}

type Details = {
  state: string
  mount: number
  period: string
  payment: string
  expiration: string
}

type Products = {
  access: number
  items: Items[]
}

type Items = {
  id: number
  title: string
  type: string
}

type Access = {
  quantity: number
}

type Billing = {
  id: number
  number: string
  date: string
  price: number
  state: string
}

export type { SubscriptionProps, Details, Products, Access, Items, Billing }
