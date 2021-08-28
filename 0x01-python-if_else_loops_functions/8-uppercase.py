#!/usr/bin/python3


def uppercase(str):
    '''function that converts a string to uppercase'''
    upper_str = ""
    for x in str:
        if ord('a') <= ord(x) <= ord('z'):
            upper_str += chr(65 + (ord(x) - ord('a')))
        else:
            upper_str += x
    print(upper_str)
