function convertMinutesToSeconds() {
    // Get the value from the input field
    const minutes = document.getElementById('minutesInput').value;

    // Convert minutes to seconds
    const seconds = minutes * 60;

    // Display the result
    document.getElementById('result').innerText = `${minutes} minutes is equal to ${seconds} seconds.`;
}
