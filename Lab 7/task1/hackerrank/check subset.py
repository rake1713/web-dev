num_test_cases = int(input())
for i in range(num_test_cases):
    n = input()
    set_a = set(map(int, input().split()))
    n = input()
    set_b = set(map(int, input().split()))
    print(set_a <= set_b)