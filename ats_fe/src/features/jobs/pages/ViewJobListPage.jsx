import React from 'react'
import PublicSidebar from '../../../shared/components/PublicSidebar';
import PublicFooter from '../../../shared/components/PublicFooter';
import HeroSection from '../../../shared/components/HeroSection';
import ViewJobListPosting from './ViewJobListPosting';


const ViewJobListPage = () => {
  return (
    <>
        <PublicSidebar />
        <HeroSection />
        <ViewJobListPosting />
        <PublicFooter />
    </>
  )
}

export default ViewJobListPage