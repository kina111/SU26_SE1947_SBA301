import React from 'react'
import PublicFooter from '../../shared/components/PublicFooter'
import PublicSidebar from '../../shared/components/PublicSidebar'
import ViewJobListPage from '../../features/jobs/pages/ViewJobListPage'

const PublicLayout = () => {
  return (
   <>
   <PublicSidebar />
    <ViewJobListPage />
    <PublicFooter />
   </>
  )
}

export default PublicLayout