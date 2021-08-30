# 0x01-python-if_else_loops_functions
In this project, I started using conditionals and loops in Python by using ```if```, ```if...else```, ```break```, ```continue```, ```pass```, ```range``` statements. In addition, I also started utilizing ```while``` and ```for``` loops. I practiced writing my own functions while learning about variable scope, arithmetic and tracebacks.

## Tasks :clipboard:

### 0. [Positive anything is better than negative nothing](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/0-positive_or_negative.py)

This Python script identifies whether a randomly generated signed number is positive or negative.

### 1. [The last digit](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/1-last_digit.py)

A script that print the last digit of a randomly generated number.

### 2. [I sometimes suffer from insomnia. And when I can't fall asleep, I play what I call the alphabet game](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/2-print_alphabet.py)

A program that prints the ASCII alphabet, in lowercase, not followed by a new line.

### 3. [When I was having that alphabet soup, I never thought that it would pay off](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/3-print_alphabt.py)

A Python script that prints the ASCII alphabet, in lowercase, not followed by a new line.
  + Prints all the letters except q and e

### 4. [Hexadecimal printing](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/4-print_hexa.py)

A program that prints all numbers from 0 to 98 in decimal and in hexadecimal.

### 5. [00...99](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/5-print_comb2.py)

A program that prints numbers from 0 to 99 separated by ',' and no new line.

### 6. [Inventing is a combination of brains and materials. The more brains you use, the less material you need](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/6-print_comb3.py)

A program that prints all possible different combination of two digits.

  + The two digits must be different
  + ```01``` and ```10``` are considered the same combination of the two digits 0 and 1
  + The smallest combinations are only printed

### 7. [islower](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/7-islower.py)

A function that checks for lowercase character using the ```ord()``` function. 
  ***test cases were provided by holberton***
 
 + Function prototype is:
   ```def islower(c):```

### 8. [To uppercase](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/8-uppercase.py)

A function that prints a string in uppercse followed by a new line.

  + ```ord()``` is used.

  + Function prototype is:
    ```def uppercase(str):```

  + ```isupper``` and ```upper()``` from ```str``` module is not used


### 9. [There are only 3 colors, 10 digits, and 7 notes; it's what we do with them that's important](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/9-print_last_digit.py)

A function that prints that last digit of a number.

  + Function prototype:
    ``` def print_last_digit(number):```

### 10. [a+b](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/10-add.py)

A function that adds two integers and returns the result

  + Function prototype:
    ``` def add(a, b): ```

### 11. [a^b](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/11-pow.py)

A function that computes a to the power b and the return the value

  + Function prototype is:
  ``` def pow(a, b): ```

### 12 . [Fizz Buzz](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/12-fizzbuzz.py)

A function that prints the numbers from 1 to 100 separated by a space. 
 
 + For multiple of three print ```Fizz``` instead of the number and for multiples of five print ```Buzz```.

 + For numbers which are multiples of both three and five print ```FizzBuzz```

### 13. [Insert in sorted linked list](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/13-insert_number.c)

C function that inserts a number into a sorted linked list.

  + If the function fails, returns ```NULL```

  + Otherwise, returns the address of the new node

  + Helper files:

    	   + [lists.h](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/lists.h)

### 14. [Smile in the mirror](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/100-print_tebahpla.py)

A program that prints the ASCII alphabet, in reverse order, alternating lowercase and uppercase.

### 15. [Remote at positoin](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/101-remove_char_at.py)

A function that creats a copy of the string removing the character at the position n.

  + Function prototype: 
    ```def remove_char_at(str, n):```

### 16. [ByteCode -> Python #2](https://github.com/Yosef-S-A/alx-higher_level_programming/blob/main/0x01-python-if_else_loops_functions/102-magic_calculation.py)

A Python function created from the following bytecode. The prototype is ``` def magic_calculation(a, b, c): ```

```
  3           0 LOAD_FAST                0 (a)
              3 LOAD_FAST                1 (b)
              6 COMPARE_OP               0 (<)
              9 POP_JUMP_IF_FALSE       16

  4          12 LOAD_FAST                2 (c)
             15 RETURN_VALUE

  5     >>   16 LOAD_FAST                2 (c)
             19 LOAD_FAST                1 (b)
             22 COMPARE_OP               4 (>)
             25 POP_JUMP_IF_FALSE       36

  6          28 LOAD_FAST                0 (a)
             31 LOAD_FAST                1 (b)
             34 BINARY_ADD
             35 RETURN_VALUE

  7     >>   36 LOAD_FAST                0 (a)
             39 LOAD_FAST                1 (b)
             42 BINARY_MULTIPLY
             43 LOAD_FAST                2 (c)
             46 BINARY_SUBTRACT
             47 RETURN_VALUE

```