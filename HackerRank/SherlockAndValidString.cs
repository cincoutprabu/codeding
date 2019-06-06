// SherlockAndValidString.cs

using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

/*
    Solution for Sherlock and Valid String coding challenge.

    Sherlock considers a string to be valid if all characters of the string
    appear the same number of times. It is also valid if he can remove just
    1 character at 1 index in the string, and the remaining characters will
    occur the same number of times. Given a string s, determine if it is
    valid. If so, return YES, otherwise return NO.

    For example, if s = abc, it is a valid string because frequencies are 
    { a: 1, b: 1, c: 1 }. So is s = abcc because we can remove one c and have
    1 of each character in the remaining string. If s = abccc however, the
    string is not valid as we can only remove 1 occurrence of c. That would
    leave character frequencies of { a: 1, b: 1, c: 2 }.
 */
class Solution {

    static string isValid(string s) {
        Dictionary<char, int> frequencies = new Dictionary<char, int>();
        foreach (char c in s) {
            if (frequencies.ContainsKey(c)) {
                frequencies[c] += 1;
            } else {
                frequencies[c] = 1;
            }
        }

        int iterations = 0;
        while (iterations < 2) { // Stop if more than 1 removal is required
            int min = int.MaxValue;
            int max = int.MinValue;
            char minC = ' ', maxC = ' ';
            foreach (char c in frequencies.Keys) {
                int value = frequencies[c];
                if (min > value) { min = value; minC = c; }
                if (max < value) { max = value; maxC = c; }
            }
            if (min == max) return "YES"; // Yes if all frequencies are same

            if (iterations == 0) { // Check if you can remove the min character
                int minCount = 0, maxCount = 0;
                foreach (char c in frequencies.Keys) {
                    int value = frequencies[c];
                    if (value == min) minCount += 1;
                    if (value == max) maxCount += 1;
                }
                // Yes if removing the min character makes the rest of characters equal
                if (minCount < maxCount && minCount == 1) return "YES";
            }

            frequencies[maxC] -= 1; // Remove one of the max chatacters and continue checking
            iterations += 1;
        }

        return "NO";
    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string s = Console.ReadLine();
        string result = isValid(s);
        textWriter.WriteLine(result);
        textWriter.Flush();
        textWriter.Close();
    }
}
