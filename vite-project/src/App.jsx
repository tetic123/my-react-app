import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TeachingSection from './components/TeachingSection'
import DifferencesSection from './components/DifferencesSection'
import IntroSection from './components/IntroSection'
import Header from './components/Header/Header'
import TabsSection from './components/TabsSection'
import './App.css'
import FeedbackSection from './components/FeedbackSection'
import { useState } from 'react'


export default function App() {
  const [ tab, setTab ] = useState('feedback')
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>
        {tab === 'main' && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}
        {tab === 'feedback' && (
          <>
            <FeedbackSection />
          </>
        )}


      </main>
    </>
  )
}

 
