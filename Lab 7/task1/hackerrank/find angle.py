import math
ab = int(input())
bc = int(input())
rad = math.atan2(ab, bc)
deg = math.degrees(rad)
result = int(round(deg))
print(f"{result}°")