import Button from './Button/Button'
import { differences } from '../data'
import { useState } from 'react'

export default function DifferencesSection() {
    const [ contentType, setContentType ] = useState(null)

    function handleClick(type) {
    setContentType(type);
    }
    return (
        <section>
        <h3>Differences from others</h3>
        <Button
          isActive = {contentType === 'way'} 
          onClick={() => handleClick('way')}
        >
          Lorem
        </Button>
        
        <Button 
          isActive = {contentType === 'easy'}
          onClick={() => handleClick('easy')}
        >
          More
        </Button>
        <Button 
          isActive = {contentType === 'program'}
          onClick={() => handleClick('program')}
        >
          More
        </Button>

        { !contentType && <p>Press the button</p>}
        { contentType && <p>{differences[contentType]}</p> }

      </section>
    )
}