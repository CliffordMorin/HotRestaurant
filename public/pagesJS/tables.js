const runTableQuery = () => {
    // Fetch function GET the data associated with it (initially set to localhost)
    fetch('/api/tables', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((tableData) => {
        console.log('tableData', tableData);
        console.log('------------------------------------');

        for (let i = 0; i < tableData.length; i++) {
          // Get a reference to the tableList element and populate it with tables
          const tableList = document.getElementById('tableList');

          // Then display the fields in the HTML (Section Name, Date, URL)
          let listItem = document.createElement('li');
          listItem.classList.add('list-group-item', 'mt-4');

          // Create elements for Table ID, ID, Name, Email, Phone
          const tableEl = document.createElement('h2');
          tableEl.textContent = `Table #${i + 1}`;

          const hrBreak = document.createElement('hr');

          const idEl = document.createElement('h2');
          idEl.textContent = `ID: ${tableData[i].customerID}`;

          const nameEl = document.createElement('h2');
          nameEl.textContent = `Name: ${tableData[i].customerName}`;

          const emailEl = document.createElement('h2');
          emailEl.textContent = `Email: ${tableData[i].customerEmail}`;

          const phoneEl = document.createElement('h2');
          phoneEl.textContent = `Phone: ${tableData[i].phoneNumber}`;

          // Append all elements to the listItem
          listItem.appendChild(tableEl);
          listItem.appendChild(hrBreak);
          listItem.appendChild(idEl);
          listItem.appendChild(nameEl);
          listItem.appendChild(emailEl);
          listItem.appendChild(phoneEl);

          // Append listItem to tableList
          tableList.appendChild(listItem);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const runWaitListQuery = () => {
    fetch('/api/reserve', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((waitData) => {
        // Here we then log the waitlistData to console, where it will show up as an object.
        console.log('runWaitListQuery -> waitData', waitData);
        console.log('------------------------------------');

        // Loop through and display each of the customers
        for (let i = 0; i < waitData.length; i++) {
          // Get a reference to the waitList element and populate it with tables
          const waitList = document.getElementById('waitList');
          console.log('runWaitListQuery -> waitList', waitList);

          // Then display the fields in the HTML (Section Name, Date, URL)
          let listItem = document.createElement('li');
          listItem.classList.add('list-group-item', 'mt-4');

          // Add elements that will display customer ID, name, email and phone number
          const tableEl = document.createElement('h2');
          tableEl.textContent = 'Table #' + (i + 1);
          console.log('runWaitListQuery -> tableEl', tableEl);

          const hrBreak = document.createElement('hr');

          const idEl = document.createElement('h2');
          idEl.textContent = `ID: ${waitData[i].customerID}`;
          console.log('runWaitListQuery -> idEl', idEl);

          const nameEl = document.createElement('h2');
          nameEl.textContent = `Name: ${waitData[i].customerName}`;
          console.log('runWaitListQuery -> nameEl', nameEl);

          const emailEl = document.createElement('h2');
          emailEl.textContent = `Email: ${waitData[i].customerEmail}`;
          console.log('runWaitListQuery -> emailEl', emailEl);

          const phoneEl = document.createElement('h2');
          phoneEl.textContent = `Phone: ${waitData[i].phoneNumber}`;
          console.log('runWaitListQuery -> phoneEl', phoneEl);

          // Append all elements to the listItem
          listItem.appendChild(tableEl);
          listItem.appendChild(hrBreak);
          listItem.appendChild(idEl);
          listItem.appendChild(nameEl);
          listItem.appendChild(emailEl);
          listItem.appendChild(phoneEl);

          waitList.appendChild(listItem);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // This function resets all of the data in our tables. This is intended to let you restart a demo.
  const clearTable = () => {
    alert('Clearing...');

    fetch('/api/clear', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let waitList = document.getElementById('waitList');
        waitList.innerHTML = '';

        let tableList = document.getElementById('tableList');
        tableList.innerHTML = '';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  let clear = document.getElementById('clear');
  clear.addEventListener('click', clearTable)

  // Run Queries!
  // ==========================================
  runTableQuery();
  runWaitListQuery();