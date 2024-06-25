const fs = require('fs');
const path = require('path');

function readSchedule(filename) {
    const schedule = {};
    const data = fs.readFileSync(filename, 'utf8');
    const lines = data.trim().split('\n').slice(1); // Skip header line

    lines.forEach(line => {
        const parts = line.split(',').map(part => part.trim());
        const providerName = parts[0];
        const startTime = parts[1];
        const endTime = parts[2];
        schedule[providerName] = { startTime, endTime };
    });

    return schedule;
}

function schedulingChallenge(filename) {
    const schedule = readSchedule(filename);
    console.log(schedule);
}

const filename = path.join(__dirname, 'test.txt');
schedulingChallenge(filename);