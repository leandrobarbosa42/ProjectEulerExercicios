#Deixar apenas um valor, sem repetição 
lista = [1,2,5,8,8,3,4,2,4,3,5,4,1,4,8,4,7,9,9,8,3,6,5,4]
print("Lista: ", lista)
lista = set(lista)
print("Lista > Set: ", lista)
lista = list(lista)
print("Set > Lista ", lista)

# unir dois set union ou |
set1 = {1,2,3,4,5}
set2 = {3,4,5,6,7}
set3 = set1 | set2
print(set3)

# Pegar apenas elementos em comum dos dois set intersection ou &
set4 = set1 & set2
print(set4)

#Pega os elementos apenas pertecem do set a esquerda difference ou -
set5 = set1 - set2
set6 = set2 - set1
print(set5)
print(set6)

#pega os elementos que fazem parte de um dos set, mas não de ambos juntos
#symmetric_difference ou ^
set7 = set1 ^ set2
print(set7) 