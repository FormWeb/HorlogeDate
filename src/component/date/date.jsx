const DateJour = () => {
    const today = new Date()

    return (
        <p>{today.toLocaleDateString()}</p>
    )
}

export default DateJour