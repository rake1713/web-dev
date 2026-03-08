a=int(input())
b=list(map(int,input().split()))
s=0 
for i in range (1,a):
        if (b[i])>0 and (b[i-1]>0):
            s+=1
print(s)