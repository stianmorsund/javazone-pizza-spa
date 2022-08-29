import React from 'react'

export class LiveAnnouncher extends React.Component<{
  message: string | undefined
  ariaLive: 'polite' | 'assertive'
}> {
  override render() {
    return (
      <div
        className="screenreader-only"
        role="status"
        aria-live={this.props.ariaLive || 'polite'}
        aria-atomic="true"
      >
        {this.props.message}
      </div>
    )
  }
}
