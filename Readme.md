# CPU Scheduling Simulator

The **CPU Scheduling Simulator** is a web application built with Django that simulates **First-Come, First-Served (FCFS)** CPU scheduling. Users can input process details (Process ID, Arrival Time, Burst Time), and the app calculates the scheduling metrics, including waiting time, turnaround time, and completion time.

### **Demo**

You can access the live demo of the project at:  
[**CPU Scheduling Simulator Demo**](https://cpu-scheduling-simulator.onrender.com/)

---

### **Features**

- **FCFS Algorithm**: The application uses the **First-Come, First-Served (FCFS)** scheduling algorithm to determine the execution order of processes.
- **Interactive UI**: Users can input process details (Process ID, Arrival Time, and Burst Time).
- **Calculations**: After inputting process data, the simulator calculates:
  - **Completion Time**
  - **Turnaround Time**
  - **Waiting Time**
- **Results Table**: Displays the calculated metrics for each process in an easy-to-read table.

---

### **Main Logic**

1. **Input Data**: 
   - The user provides the `Process ID`, `Arrival Time`, and `Burst Time` for each process.
   
2. **FCFS Scheduling**:
   - The FCFS algorithm processes the input data sequentially, starting with the process that arrives first. The main logic involves:
     - **Completion Time (CT)**: The time at which a process finishes execution.
     - **Turnaround Time (TAT)**: The total time a process spends in the system, from arrival to completion.
     - **Waiting Time (WT)**: The time a process spends waiting in the ready queue before being executed.

3. **Displaying Results**: 
   - After processing, the results (Completion Time, Turnaround Time, Waiting Time) are displayed in a table on the web page.

---

### **Technologies Used**

- **Django**: Backend web framework for developing the application.
- **Bootstrap**: Frontend framework for responsive design.
- **JavaScript**: For dynamic interactions like updating the UI without reloading the page.
- **Gunicorn**: WSGI server for running the application in production.

---

### **How to Run Locally**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-user-name>/cpu_scheduling_simulator.git
   cd cpu_scheduling_simulator
2. **Set up Virtual Environment**:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate  # On Windows, use .venv\Scripts\activate
3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
4. **Start the Serve**:
   ```bash
   python manage.py runserver
5. **Visit the Application**:

   Open your browser and navigate to [http://localhost:8000](http://localhost:8000) to use the CPU Scheduling Simulator.

   
6. **Deployment**:
   
   The application is deployed using Render. It is automatically updated with the latest changes from the GitHub repository.

