#!/usr/bin/python3


#def islower(c):
#    return(ord('a') <= ord(c) <= ord('z'))


def islower(c):
    '''This function checks for lowercase or uppercase of a character'''
    if ord(c) in range(97, 123):
        return True
    else:
        return False

