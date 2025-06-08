window.onload = addProcess;  

function addProcess() {
    const tbody = document.getElementById('t-body');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="text" max="10" name="pid[]" class="form-control" required/></td>
        <td><input type="number" min="0" name="at[]" class="form-control" required/></td>
        <td><input type="number" min="0" name="bt[]" class="form-control" required/></td>
        <td><button type="button" onclick="this.closest('tr').remove()" class="btn btn-danger btn-sm">Remove</button></td>
    `;
    tbody.appendChild(row);
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const trimmed = cookie.trim();
            if (trimmed.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(trimmed.slice(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function formHandler(event) {
    event.preventDefault();
    // console.log("Hi I am working");
    const form = event.target;
    const allFormData = new FormData(form);

    const formData = {
        pids: allFormData.getAll('pid[]'),
        arrival_times: allFormData.getAll('at[]'),
        burst_times: allFormData.getAll('bt[]')
    };

    // console.log(formData);

    fetch('get-result', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error ${response.status}`);
            return response.json();
        })
        .then(data => {
            // console.log('Successful:', data);
            showResult(data);
        })
        .catch(error => {
            console.error('Error:', error);
        })
};

function showResult(data) {
    const result_div = document.getElementById('result-div');
    result_div.innerHTML = '';
    const h1 = document.createElement('h4');
    h1.innerText = 'Simulation Results';
    const table = document.createElement('table');
    table.classList.add('table','table-bordered', 'mt-4')
    table.innerHTML = '';
    const tbody = document.createElement('tbody');
    tbody.innerHTML = '';
    const thead = document.createElement('thead');
    thead.innerHTML = '';
    thead.classList.add('table-dark')
    // console.log(data.results.pids);
    const n = data.results.pids.length;
    thead.innerHTML = `
        <tr>
            <th>Process ID</th>
            <th>Arrival Time</th>
            <th>Burst Time</th>
            <th>Completion Time</th>
            <th>Turn Around Time</th>
            <th>Waiting Time</th>
        </tr>`
    result_div.appendChild(h1);
    table.appendChild(thead);
    table.appendChild(tbody);
    // console.log(table)
    for (let i = 0; i < n; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="text-center">${data.results.pids[i]}</td>
            <td class="text-center">${data.results.arrival_times[i]}</td>
            <td class="text-center">${data.results.burst_times[i]}</td>
            <td class="text-center">${data.results.completion_times[i]}</td>
            <td class="text-center">${data.results.turn_around_times[i]}</td>
            <td class="text-center">${data.results.waiting_times[i]}</td>
        `;
        tbody.appendChild(row);
    }
    result_div.appendChild(table);
    // console.log(result_div);

    const avgDiv = document.getElementById('averages');
        avgDiv.innerHTML = `
        <div class="alert alert-info">
        <strong>Average Turn Around Time: </strong> ${data.results.avg_tat}<br>
        <strong>Average Waiting Time: </strong> ${data.results.avg_wt}
        </div>
        `;
}

document.getElementById('my-form').addEventListener('submit', formHandler);
