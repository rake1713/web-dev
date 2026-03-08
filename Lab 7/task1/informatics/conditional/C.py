a=int(input())
b=int(input())
if a%10!=0 and b==(-1):
    print("YES")
if a%b!=0 and b==1:
    print("YES")
else:
    print("NO")