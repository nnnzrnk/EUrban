const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setCurrentNOE(value)

        let errorText
        if (isNaN(value) || value <= 0){
           errorText = "Oops! Please enter a number greater than 0"
           setCurrentNOE(0)
        } else {
           errorText = ""
           setCurrentNOE(value)
        }
      setErrorAlert(errorText)
    }

    return (
        <div id="number-input">
            <label className="number-lable" for="noe">Displayed events: </label>
            <input id="noe" type="number" min="1" max='32' defaultValue="32" className="number-input" onChange={handleInputChanged}/>
        </div>
    )
}

export default NumberOfEvents

