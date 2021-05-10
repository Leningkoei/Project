import math;
def func(x, y):
    z = x + y
    if (x == 0):
        e = -(0 + (y / z) * math.log2(y / z))

    elif (y == 0):
        e = -((x / z) * math.log2(x / z) + 0)

    else:
        e = -((x / z) * math.log2(x / z) + (y / z) * math.log2(y / z))

    return e

def getOutlookE():
    overcastE = func(0, 4)
    rainE = func(2, 3)
    sunnyE = func(3, 2)
    outlookE = (5 / 14) * overcastE + (4 / 14) * rainE + (5 / 14) * sunnyE
    print(outlookE)
    return outlookE

def getTemperatureE():
    coolE = func(1, 3)
    hotE = func(2, 2)
    mildE = func(2, 4)
    temperatureE = (4 / 14) * coolE + (4 / 14) * hotE + (6 / 14) * mildE
    print(temperatureE)
    return temperatureE

def getHumidityE():
    highE = func(4, 3)
    normalE = func(1, 6)
    humidityE = (7 / 14) * highE + (7 / 14) * normalE
    print(humidityE)
    return humidityE

def getWindE():
    strongE = func(3, 3)
    weakE = func(2, 6)
    windE = (6 / 14) * strongE + (8 / 14) * weakE
    print(windE)
    return windE

if __name__ == "__main__":
    outlookE = getOutlookE()
    temperatureE = getTemperatureE()
    humidityE = getHumidityE()
    windE = getWindE()
    print(min(outlookE, temperatureE, humidityE, windE))

