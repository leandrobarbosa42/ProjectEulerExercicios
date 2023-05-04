limite = 4000000
a, b = 1,1
sum = 0
c = a+b

while b < limite:  
    sum += c
    a = b+c
    b = c+a
    c = a+b
    

print(sum)