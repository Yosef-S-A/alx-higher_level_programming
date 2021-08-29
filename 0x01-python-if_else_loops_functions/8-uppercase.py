#!/usr/bin/python3


def uppercase(str):
    '''function that converts a string to uppercase'''
    for x in str:
        if ord('a') <= ord(x) <= ord('z'):
            x = chr(65 + (ord(x) - ord('a')))
        print("{}".format(x), end="")
    print("")
