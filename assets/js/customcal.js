$(document).ready(function() {
	
		$('#calendar').fullCalendar({

			// THIS KEY WON'T WORK IN PRODUCTION!!!
			// To make your own Google API key, follow the directions here:
			// http://fullcalendar.io/docs/google_calendar/
			googleCalendarApiKey: 'AIzaSyCSTTKlAKhQReKuUt9MBLsTd0HNT4VxY8o',
		
			// US Holidays
			events: {
				googleCalendarId: 'dfwinnovationc@gmail.com'
			},
			
			eventClick: function(event) {
				// opens events in a popup window
				window.open(event.url, 'gcalevent', 'width=700,height=600');
				return false;
			},
			
			loading: function(bool) {
				$('#loading').toggle(bool);
			}
			
		});
		
	});

//TODO: get events description to Upcoming events
/*see 
  *http://stackoverflow.com/questions/7046519/how-to-access-collected-jquery-fullcalendar-event-data
  *http://fullcalendar.io/docs/event_data/clientEvents/
 */