target = 999

def SumDivBy(n):
  p = target // n
  return n *(p*(p+1)) // 2

print(SumDivBy(3)+SumDivBy(5)-SumDivBy(15))
