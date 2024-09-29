function checkSubscription() {
    // Prompt the user to confirm their subscription
    let isSubscribed = confirm("Have you subscribed to our YouTube channel?");
    if (isSubscribed) {
        // Allow the download if the user confirms subscription
        window.location.href = 'https://youtube.com/@shanthamman-xb8gu?si=gHwujaAg7bjpFq-P';
        <script>
        document.getElementById('subscribeButton').addEventListener('click', function() {
            setTimeout(function() {
                window.location.href = 'notes.html';
            }, 2000); // Adjust the delay as needed
        });
    </script>
    } else {
        // Alert the user to subscribe first
        alert("Please subscribe to our YouTube channel to download the notes.");
    }
}
