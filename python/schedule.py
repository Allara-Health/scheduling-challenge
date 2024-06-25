def read_schedule(filename):
    schedule = {}
    with open(filename, 'r') as file:
        next(file)
        for line in file:
            parts = line.strip().split(',')
            provider_name = parts[0].strip()
            start_time = parts[1].strip()
            end_time = parts[2].strip()
            schedule[provider_name] = (start_time, end_time)
    return schedule

def schedulingChallenge(filename):
    schedule = read_schedule(filename)
    print(schedule)


filename = 'test.txt'
response = schedulingChallenge(filename=filename)