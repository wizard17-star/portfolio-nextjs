'use client'

import { useEffect, useState } from 'react'
import { site } from '@/lib/site'

/** Current time in Warsaw — helps recruiters in other time zones plan a call. */
export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: site.timeZone,
      timeZoneName: 'short',
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {time ?? '--:--'} in Warsaw
    </span>
  )
}
