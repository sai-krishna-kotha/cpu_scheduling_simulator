# 🧠 CPU Scheduling Algorithm Simulator (Django Web App)

This is a web-based simulator that demonstrates how different CPU scheduling algorithms work. Built using Django, it allows users to input process data, select a scheduling method, and view the results using visual Gantt charts and detailed tables.

<p align="center">
  <img src="https://img.shields.io/badge/tech-django-green" />
  <img src="https://img.shields.io/badge/status-WIP-yellow" />
</p>

---

## 🚀 Features

- 🔘 Simulate popular CPU scheduling algorithms:
  - FCFS (First Come First Serve)
  - SJF (Shortest Job First – Preemptive & Non-Preemptive)
  - Priority Scheduling (Optional)
  - Round Robin (with time quantum)
- 🧾 Dynamic form to input process details
- 📊 Visual output includes:
  - Gantt chart representation
  - Turnaround and waiting time for each process
  - Average turnaround and waiting time
- 🖥️ Clean, responsive interface with Bootstrap
- ⚙️ Modular backend logic (easy to extend)

---

## 📷 Demo

*Coming Soon:*

---

## 🛠️ Tech Stack

- **Backend**: Django (Python)
- **Frontend**: HTML, Bootstrap
- **Forms**: HTML + JS

---

## 🧠 How It Works

1. User inputs process data (PID, arrival time, burst time, etc.).
2. Chooses a scheduling algorithm from the options provided.
3. Backend processes the input and runs the selected scheduling logic.
4. Output is generated showing:
   - Process execution order (Gantt chart)
   - Waiting and turnaround times for each process
   - Averages for comparison

---

## 🧪 Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cpu-scheduling-simulator.git
   cd cpu-scheduling-simulator
