import { headers } from 'next/headers'

export const useIsMobile = () => {
  return headers().get('X-Is-Mobile') === 'true'
}
