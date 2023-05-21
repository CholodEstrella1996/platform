export type ChipProps = {
  title: string
  size?: string
  status?:
    | string
    | 'default'
    | 'invited'
    | 'active'
    | 'delivered'
    | 'pending'
    | 'cancelled'
    | 'in-cancellation'
    | 'suspended'
    | 'retry'
    | 'expired'
    | 'unsubmitted'
    | 'primary'
  fullWidth?: boolean
}
