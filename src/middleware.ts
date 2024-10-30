import { type NextRequest, NextResponse, userAgent } from 'next/server'

export function middleware(request: NextRequest) {
  const { device } = userAgent(request)

  const response = NextResponse.next()
  response.headers.set(
    'X-Is-Mobile',
    device.type === 'mobile' ? 'true' : 'false',
  )

  return response
}
