#Qual é o maior fator primo do número 600851475143 ?
#n = numéro dado e k = 2, 3, 4, 5, ... . Para cada k, se for um fator de n,
#divida n por k e divida completamente cada k antes de passar para o próximo. 
#Vemos que quando k é um fator, ele será necessariamente primo, pois todos os fatores menores foram removidos 

n=600851475143
#Como 2 é o único primo par,então pode se tratar separadamente
#Trantando 2
if n%2 == 0:
  n=n/2
  lastFator=2
  while n%2 == 0:
    n=n/2
else: lastFator = 1

 #Demais casos, incrementamos o fator em +2
fator = 3
  
while n>1:
    if n%fator == 0:
      n=n/fator
      lastFator=fator
      while n%fator == 0:
        n=n/fator
    fator+=2

print(lastFator)