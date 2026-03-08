_ = input()
A = set(map(int, input().split()))
n = int(input())

for i in range(n):
    a = input().split()
    cmd = a[0]
    other_set = set(map(int, input().split()))
    if hasattr(A, cmd):
        getattr(A, cmd)(other_set)
print(sum(A))