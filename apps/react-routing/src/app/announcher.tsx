import React from 'react'

export class LiveAnnouncher extends React.Component<{ page: string | undefined }> {
  override componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  override render() {
    return (
      <div
        className="screenreader-only"
        role="status"
        aria-live="assertive"
        aria-atomic="true"
      >
        Du er nå på side {this.props.page}
      </div>
    )
  }
}
