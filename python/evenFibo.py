limite = 4000000
a, b = 1,1
sum = 0

while b < limite:  
    if b % 2 == 0 : sum += b
    aux= a+b
    a = b
    b = aux
    

print(sum)