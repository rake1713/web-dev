def min(a,b,c,d):
    res=a
    if res>b:
        res=b
    if res>c:
        res=c
    if res>d:
        res=d
    return res

n=list(map(int,input().split()))
print(min(n[0],n[1],n[2],n[3]))