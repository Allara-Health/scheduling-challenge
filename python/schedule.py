def schedulingChallenge(filename):
    with open(filename, 'r') as file:
        for line in file:
            print(line)


filename = 'test.txt'
response = schedulingChallenge(filename=filename)