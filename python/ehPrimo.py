#Codigo utilizando a tecnica de "Testemunha de primalidade"
#Essa técnica se baseia no fato de que, se um número não é primo, 
#ele pode ser escrito como um produto de dois fatores, 
#sendo que pelo menos um deles é menor ou igual à sua raiz quadrada.

def ehPrimo(n):
    if n < 2 : return False
    for i in range(2,int(n**0.5)+1):
        if n%i == 0:
            return False
    return True

print(ehPrimo(6857))