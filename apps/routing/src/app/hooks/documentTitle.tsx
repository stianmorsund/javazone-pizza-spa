import { useEffect } from 'react'
export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} - WebsiteName`
  }, [title])

  return null
}
