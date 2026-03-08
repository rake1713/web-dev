n = int(input())
unique_scores = set(map(int, input().split()))
sorted_scores = sorted(list(unique_scores))
print(sorted_scores[-2])