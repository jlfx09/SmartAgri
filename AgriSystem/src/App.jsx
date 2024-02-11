import React, { useState } from 'react';
import { Background } from '../src/Components/Background/Background.jsx';
import { Navbar } from '../src/Components/Navbar/Navbar.jsx';
import { Hero } from '../src/Components/Hero/Hero.jsx'
 

const App = () => {
  let heroData = [
    {text1:"Welcome to",text2:"Smart Agriculture"},
    {text1:"Indulge in",text2:"Greeneries"},
    {text1:"Plant your",text2:"greens smart."},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      heroData = {heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
    </div>
  )
}

export default App