#Declarando variaveis
limite = 1000
contador = 0
somaMult= 0

while contador < limite:
    if contador % 3 == 0 or contador % 5 == 0:
        somaMult += contador
        contador += 1
    else: contador+= 1

print(somaMult)