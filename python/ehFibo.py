#Achar n-enessimo termo na sequencia de Fibonacci
#Usando a formula de Binet

def nFibo(n):
  #Phi = proporção áurea
  phi = (1+5**0.5)/2
  #Formula de Binet
  fb = int((phi**n - (1-phi)**n)/5**0.5)
  return fb

print(nFibo(20))