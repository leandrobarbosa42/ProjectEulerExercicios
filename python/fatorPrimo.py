n=600851475143
if n%2 == 0:
  n=n/2
  lastFator=2
  while n%2 == 0:
    n=n/2
else: lastFator = 1
  
fator = 3
  
while n>1:
    if n%fator == 0:
      n=n/fator
      lastFator=fator
      while n%fator == 0:
        n=n/fator
    fator+=2

print(lastFator)