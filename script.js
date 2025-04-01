document.getElementById("dispatch-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    const unit = document.getElementById("unit").value;
    const location = document.getElementById("location").value;
    const callType = document.getElementById("call-type").value;

    // Create a log entry
    const logEntry = document.createElement("div");
    logEntry.textContent = `Dispatched ${unit} to ${location} for a ${callType} call.`;
    
    // Append to dispatch log
    document.getElementById("dispatch-log").appendChild(logEntry);

    // Clear form fields
    document.getElementById("dispatch-form").reset();
});
