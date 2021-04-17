const submitBtn = document.querySelector('.submit');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Grab form elements
    let newReservation = {
      customerName: document.getElementById('reserve-name').value.trim(),
      phoneNumber: document.getElementById('reserve-phone').value.trim(),
      customerEmail: document.getElementById('reserve-email').value.trim(),
      customerID: document.getElementById('reserve-unique-id').value.trim(),
    };

    console.log('submitBtn.onclick -> newReservation', newReservation);

    
    fetch('/api/tables', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReservation),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            
  
            alert('Yay! You are officially booked!');
          } else {
            // Otherwise, tell the  user they are on the wait list
  
            alert('Sorry you are on the wait list');
  
            // Clear the form
            document.getElementById('reserve-name').value = '';
            document.getElementById('reserve-phone').value = '';
            document.getElementById('reserve-email').value = '';
            document.getElementById('reserve-unique-id').value = '';
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });