def deg(a,b):
    if a == 1 or b == 1:
        return 1
    else:
        return 0

x, y = map(int, input().split())
print(deg(x, y))