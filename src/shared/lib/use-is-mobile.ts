import { use } from 'react'
import { headers } from 'next/headers'

export const useIsMobile = () => {
  return use(headers()).get('X-Is-Mobile') === 'true'
}
