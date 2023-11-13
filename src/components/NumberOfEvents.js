const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setCurrentNOE(value)

        let errorText
        if (isNaN(value) || value <= 0){
           errorText = "It's not a number"
        } else {
           errorText = ""
           setCurrentNOE(value)
        }
      setErrorAlert(errorText)
    }

    return (
        <div id="number-of-events">
            <input type="text" defaultValue="32" className="number-input" onChange={handleInputChanged}/>
        </div>
    )
}

export default NumberOfEvents
