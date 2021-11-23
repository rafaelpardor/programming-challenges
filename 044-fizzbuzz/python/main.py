#!/usr/bin/python3

def fizzbuzz(n):
    if n % 15 == 0:
        return "FizzBuzz"
    elif n % 3 == 0:
        return "Fizz"
    elif n % 5 == 0:
        return "Buzz" 
    else:
        return n

def main():
    print("Fizz Buzz is reeeeeally hard omg.")
    for i in range(1, 30):
        print(fizzbuzz(i))

if __name__ == "__main__":
    main()

