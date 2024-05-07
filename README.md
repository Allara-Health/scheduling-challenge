# **Challenge:**

We are interested in understanding your approach to solving a crucial problem in telehealth scheduling at Allara, where innovative solutions can significantly enhance patient care and operational efficiency. You will be tasked with developing a system to manage and optimize telehealth appointments for healthcare providers.

### **Requirements:**

- Use any programming language that you are comfortable with; adjustments or extensions to your solution may be discussed during the interview. 
- You may use external libraries as needed, except for web frameworks, which are not required for the task and may introduce unnecessary complexity.
- Properly tested solutions are essential to demonstrate the code is production-ready.

### Background:

Allara is expanding its telehealth services, necessitating a scalable and efficient appointment scheduling system. Currently, appointment scheduling is semi-manual and not adequate for the company's projected growth.

**System Objectives:**

- Develop a command-line application to process a file input detailing healthcare providers' availability and output a schedule of appointments.
- Each appointment slot should include a 30-minute consultation with a 15-minute buffer before and after for preparation and follow-up.
- Optimize the schedule to prioritize appointments during high-demand hours while ensuring adherence to providers' availability and time zones.

**Operational Constraints:**

- Providers' work hours are from 8:00am to 8:00pm, Monday through Friday, adjusted to their local time zones.

**Business Rules:**

- Appointments should be 30 minutes long, with an additional 15-minute buffer before and after each appointment.
- Schedule appointments to start on the quarter-hour (e.g., 8:00, 8:15, 8:30).
- Prioritize afternoon and early evening hours for scheduling due to higher patient availability.

**Example Input:**
```
Provider Name, Availability Start, Availability End, Time Zone
Dr. Scooby Doo, 08:00, 18:00, EST
Dr. Shaggy Rogers, 09:00, 17:00, PST
```

**Example Output:**
```
Monday 12/31/2024

Dr. Scooby Doo - EST
  08:15 - 09:00
  09:15 - 10:00
  ...
Dr. Shaggy Rogers - PST
  09:15 - 10:00
  10:15 - 11:00
  ...
```


How to run JS: `node schedule.js`
How to run python: `python3 schedule.py` 