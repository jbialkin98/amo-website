'use client'

import Navbar from '../components/Navbar'
import MemberCard from '../components/MemberCard';
import MembersPage from '../components/MembersPage';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
        <Navbar underline="Members" />
        <MembersPage />
        <Footer />
    </main>
  )
}