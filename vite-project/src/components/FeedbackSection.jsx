import Button from './Button/Button'
import {useState} from 'react'

export default function FeedbackSection() {
    const [name, setName] = useState('')
    const [hasError, setHasError] = useState(false)
    const [reason, setReason] = useState('help')

    function handleNameChange(event) {
        setName(event.target.value)
        setHasError(event.target.value.trim().length === 0)
    }
    function toggleError() {
        setHasError((prev) => !prev)

    }
    return (
        <section>
            <h3>
                Feedback
            </h3>
            <Button onClick={toggleError}>Toggle Error</Button>
            <form action="">
                <label htmlFor="name">Your Name</label>
                <input 
                    id="name" 
                    type="text" 
                    className="control" 
                    value={name} 
                    style={{
                        border: hasError ? '1px solid red' : null
                    }}
                    onChange={handleNameChange}/>
                <label htmlFor="reason">Your reason</label>
                <select id="reason" className="control" value={reason} onChange={event => setReason(event.target.value)}>
                    <option value="error">Error</option>
                    <option value="help">Help</option>
                    <option value="suggest">Suggest</option>
                </select>

                <pre>
                    Name: {name}
                    <br />
                    Reason: {reason}
                </pre>

                <Button disabled={hasError} isActive={!hasError}>Send</Button>
            </form>
        </section>
    )
}