n = int(input())
s = set(map(int, input().split()))
ss = int(input())
for i in range(ss):
    command = input().split()
    a = command[0]
    if a == "pop":
        s.pop()
    elif a == "remove":
        s.remove(int(command[1]))
    elif a == "discard":
        s.discard(int(command[1]))
print(sum(s))