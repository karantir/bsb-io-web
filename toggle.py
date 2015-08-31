import time
from bsb_io import *

p1 = Pin(1)
p1.direction = OUTPUT
v = 1
while True:
    if v==1:
        v = OFF
        print "[OFF]\r"
    else:
        v = ON
        print "[ON ]\r"
    p1.value = v
    time.sleep(1)