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
- Each appointment slot should include a 30-minute consultation with a 5-minute buffer before and after for preparation and follow-up.
- Optimize the schedule to prioritize appointments during high-demand hours while ensuring adherence to providers' availability.

**Operational Constraints:**

- Providers' work hours are from 8:00am to 8:00pm, Monday through Friday.

**Business Rules:**

- Appointments should be 30 minutes long, with an additional 5-minute buffer before and after each appointment.
- Schedule appointments to start at any 5-minute interval (e.g., 8:00, 8:05, 8:10).
- Prioritize appointments at the end of the day to account for higher patient demand, ensuring the last appointment ends exactly at the end of the provider’s workday with a 5-minute buffer (e.g., if the provider’s end time is 6:00pm, the last appointment should end at 5:55pm including the buffer time).

**Example Input:**
```
Provider Name, Availability Start, Availability End
Dr. Scooby Doo, 08:00, 18:00
Dr. Shaggy Rogers, 09:00, 17:00
```
**Example Output:**

```
Appointment Schedule for Tuesday 06/25/2024

Dr. Scooby Doo - Available Times:
  08:05 - 08:35
  08:40 - 09:10
  09:15 - 09:45
  09:50 - 10:20
  10:25 - 10:55
  11:00 - 11:30
  11:35 - 12:05
  12:10 - 12:40
  12:45 - 13:15
  13:20 - 13:50
  13:55 - 14:25
  14:30 - 15:00
  15:05 - 15:35
  15:40 - 16:10
  16:15 - 16:45
  16:50 - 17:20
  17:25 - 17:55

Dr. Shaggy Rogers - Available Times:
  09:25 - 09:55
  10:00 - 10:30
  10:35 - 11:05
  11:10 - 11:40
  11:45 - 12:15
  12:20 - 12:50
  12:55 - 13:25
  13:30 - 14:00
  14:05 - 14:35
  14:40 - 15:10
  15:15 - 15:45
  15:50 - 16:20
  16:25 - 16:55
```

How to run python: `python3 schedule.py` 
How to run ts: `npx tsx schedule.ts`
