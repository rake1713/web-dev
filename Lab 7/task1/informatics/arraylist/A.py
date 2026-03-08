a=int(input())
b=list(map(int,input().split()))
for i in range (a):
    if i%2==0:
        print(b[i],end=' ')