// RepeatedString.cs

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
    "Repeated String" Problem Statement:

    Consider a string s of lowercase English letters repeated infinitely many
    times. Given an integer n, find and print the number of letter a's in the
    first n letters of the infinite string. For example, if s = "abcac" and
    n = 10, there are 4 occurences of a in the repeated string "abcacabcac".
 */

class Solution {

    static long getACount(string s) {
        long aCount = 0;
        foreach (char c in s) {
            if (c == 'a') {
                aCount += 1;
            }
        }
        return aCount;
    }

    static long repeatedString(string s, long n) {
        if (s.Length > n) s = s.Substring(0, (int)n);

        // Find number of 'a' in the given string
        long aCount = getACount(s);

        // Count number of times the given string has
        // to be repeated to match the given length
        long repeatCount = n / (long)s.Length;
        long lengthCounter = repeatCount * s.Length;
        
        // Find number of 'a' in the last "remaining" string
        long remainingACount = 0;
        if (n - lengthCounter > 0) {
            s = s.Substring(0, (int)(n - lengthCounter));
            remainingACount = getACount(s);
        }

        return (aCount * repeatCount) + remainingACount;
    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string s = Console.ReadLine();
        long n = Convert.ToInt64(Console.ReadLine());
        long result = repeatedString(s, n);

        textWriter.WriteLine(result);
        textWriter.Flush();
        textWriter.Close();
    }
}
