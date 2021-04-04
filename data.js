export default {
    start() {
        const request = new XMLHttpRequest();
        request.open('GET', 'https://res.cloudinary.com/joaosereia/raw/upload/v1617132044/data.json', true);

        var data;
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                data = JSON.parse(request.responseText);
            } else {
                // We reached our target server, but it returned an error

            }
        };

        request.onerror = function () {
            // There was a connection error of some sort
        };

        request.send();

    }
}