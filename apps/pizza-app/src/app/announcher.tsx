export function LiveAnnouncher({
  message,
  ariaLive,
}: {
  message: string | undefined
  ariaLive: 'polite' | 'assertive'
}) {
  return (
    <div
      className="screenreader-only"
      role="status"
      aria-live={ariaLive || 'polite'}
      aria-atomic="true"
    >
      {message}
    </div>
  )
}
