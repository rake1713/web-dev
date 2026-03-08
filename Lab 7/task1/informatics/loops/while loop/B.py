a=int(input())
i=a//2
s=0
while i>0:
    if a%i==0 and i!=1:
        s=i
    i-=1
print(s)