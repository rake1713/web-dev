def swap_case(s):
    res = ""
    for ss in s:
        if ss.isupper():
            res += ss.lower()
        elif ss.islower():
            res += ss.upper()
        else:
            res += ss
    return res
s = input()
print(swap_case(s))