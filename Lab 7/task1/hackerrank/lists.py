if __name__ == '__main__':
    n = int(input())
    a = []    

    for i in range(n):
        line = input().split()
        cmd = line[0]
        args = line[1:] 
        if cmd == "insert":
            a.insert(int(args[0]), int(args[1]))
        elif cmd == "print":
            print(a)
        elif cmd == "remove":
            a.remove(int(args[0]))
        elif cmd == "append":
            a.append(int(args[0]))
        elif cmd == "sort":
            a.sort()
        elif cmd == "pop":
            a.pop()
        elif cmd == "reverse":
            a.reverse()