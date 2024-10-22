const fs = require('fs');
const path = require('path');

interface Schedule {
  [providerName: string]: {
    startTime: string;
    endTime: string;
  };
}

function readSchedule(filename: string): Schedule {
  const schedule: Schedule = {};
  const data = fs.readFileSync(filename, 'utf8');
  const lines = data.trim().split('\n').slice(1); // Skip header line

  lines.forEach((line: string) => {
    const parts = line.split(',').map((part: string) => part.trim());
    const providerName = parts[0];
    const startTime = parts[1];
    const endTime = parts[2];
    schedule[providerName] = { startTime, endTime };
  });

  return schedule;
}

function schedulingChallenge(filename: string): void {
  const schedule = readSchedule(filename);
  console.log(schedule);
}

const filename = path.join(__dirname, 'test.txt');
schedulingChallenge(filename);
