a=999
maiorPali= 0
def reverteNum(n):
    revertido = 0
    while n > 0:
      temp = n%10
      revertido = revertido*10+temp 
      n = n//10
    return revertido
def ehPali(n):
   if n == reverteNum(n) : return True
   else: return False
while a >= 100:
  b=999
  while b >= a:
    if a*b <= maiorPali : break
    if ehPali(a*b): maiorPali = a*b
    b-=1
  a-=1

print(maiorPali)