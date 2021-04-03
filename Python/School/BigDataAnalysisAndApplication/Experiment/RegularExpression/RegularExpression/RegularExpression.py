import re

#01
print('01:')

time = '19:05:30'

time = re.match(r'(\d{2}):(\d{2}):(\d{2})$', time)

print('hour = ', time.group(1))
print('minute = ', time.group(2))
print('second = ', time.group(3))

print()
#02
print('02:')

m = 'a, b;; c  d'

print(re.split(r'[\s\,\;]+', m))

print()

#03
print('03:')

re_telephone = re.compile(r'^(\d{3})-(\d{7})$')
telp0 = '024-1234567'
telp1 = '024-2345678'
telp2 = '027-1345679'
telp3 = '010-3458721'

telp0 = re_telephone.match(telp0).groups()
telp1 = re_telephone.match(telp1).groups()
telp2 = re_telephone.match(telp2).groups()
telp3 = re_telephone.match(telp3).groups()

print('telp0 = ', telp0)
print('telp1 = ', telp1)
print('telp2 = ', telp2)
print('telp3 = ', telp3)

print()

#04
print('04:')

str0 = '12a*23Gb*12ab'
re_smjb = re.compile(r'[ab]\*.*\d{2}')

a = re_smjb.match(str0)
b = re_smjb.search(str0)
c = re_smjb.findall(str0)

print('match = ', a)
print('search = ', b)
print('findall = ', c)

print()
