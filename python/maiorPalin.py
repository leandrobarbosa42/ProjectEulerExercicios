#Um número palindrômico lê o mesmo nos dois sentidos: 61016
#Encontre o maior palíndromo feito com o produto de dois números de três dígitos.

a=999
maiorPali= 0

#Funçao para reverter um número, ex: entrada(321) retorna(123)
def reverteNum(n):
    revertido = 0
    while n > 0:
      temp = n%10
      revertido = revertido*10+temp 
      n = n//10
    return revertido

#Função para verificar se é um palindrômico
def ehPali(n):
   if n == reverteNum(n) : return True
   else: return False

#Encontrado o maior palidrômico
while a >= 100:
  b=999
  while b >= a:
    if a*b <= maiorPali : break
    if ehPali(a*b): maiorPali = a*b
    b-=1
  a-=1

print(maiorPali)