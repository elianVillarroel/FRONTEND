// Calendario_de_eventos_script.js
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: function (fetchInfo, successCallback, failureCallback) {
            fetch('https://api.example.com/events') // Cambia esta URL por la de tu API
                .then(response => response.json())
                .then(data => {
                    var events = data.map(event => {
                        return {
                            title: event.title,
                            start: event.start,
                            end: event.end,
                            description: event.description
                        };
                    });
                    successCallback(events);
                })
                .catch(error => {
                    console.error('Error fetching events:', error);
                    failureCallback(error);
                });
        }
    });

    calendar.render();
});
