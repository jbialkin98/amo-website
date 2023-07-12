'use client'

import Navbar from '../components/Navbar'
import MemberCard from '../components/MemberCard';
import MembersPage from '../components/MembersPage';
import Footer from '../components/Footer'

export default function Home() {
  function handleClick(link: string) {
    window.open(`${link}`,'_blank');
  }

  return (
    <main className='flex flex-col min-h-screen'>
        <Navbar handleClick={handleClick} underline="Members" />
        <MembersPage />
        <Footer handleClick={handleClick} />
    </main>
  )
}