#!/usr/bin/python3
import unittest

from main import fizzbuzz

class TestFizzBuzz(unittest.TestCase):
    """Testing FizzBuzz implementation."""

    def test_fizzbuzz(self):
        """Test FizzBuzz"""
        self.assertEqual(fizzbuzz(3),"Fizz")
        self.assertEqual(fizzbuzz(5),"Buzz")
        self.assertEqual(fizzbuzz(15),"FizzBuzz")
        self.assertNotEqual(fizzbuzz(9),"Buzz")
        self.assertEqual(fizzbuzz(30),"FizzBuzz")


    def test_fizz_number(self):
        """Testing"""
        for i in range(100):
            if i % 3 == 0 and 1 % 5 == 0:
                self.assertEqual(fizzbuzz(i), "Fizz")

if __name__ == "__main__":
    unittest.main()
