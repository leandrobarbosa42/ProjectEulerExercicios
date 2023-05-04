#Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.

contador = 0
limite = 1000
somaMult= 0

while contador < limite:
    if contador % 3 == 0 or contador % 5 == 0:
        somaMult += contador
        contador += 1
    else: contador+= 1

print(somaMult)