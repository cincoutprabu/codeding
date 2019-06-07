// MakingAnagrams.cs

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
    "Making Anagrams" Problem Statement:

    We consider two strings to be anagrams of each other if the first
    string's letters can be rearranged to form the second string. In other
    words, both strings must contain the same exact letters in the same
    exact frequency. For example, "bacdc" and "dcbac" are anagrams, but 
    "bacdc" and "dcbad" are not.

    Given two strings a and b, that may or may not be of the same length,
    determine the minimum number of character deletions required to make
    them anagrams. Any characters can be deleted from either of the strings.

    For example, if a = "cde" and b = "dcf", we can delete 'e' from string a
    and 'f' from string b, so that both remaining strings are "cd" and "dc"
    which are anagrams.

    The strings a and b consist of lowercase English alphabetic letters [a-z].
 */

class Solution {

    static int makeAnagram(string a, string b) {
        Dictionary<char, int> dictA = new Dictionary<char, int>();
        Dictionary<char, int> dictB = new Dictionary<char, int>();

        // Count characters from string a
        foreach (char c in a) {
            if (dictA.ContainsKey(c))
                dictA[c] += 1;
            else
                dictA.Add(c, 1);
        }

        // Count characters from string b
        foreach (char c in b) {
            if (dictB.ContainsKey(c))
                dictB[c] += 1;
            else
                dictB.Add(c, 1);
        }

        // Count the differences
        int diff = 0;
        string all = "abcdefghijklmnopqrstuvwxyz";
        foreach (char c in all) {
            int aCount = dictA.ContainsKey(c) ? dictA[c] : 0;
            int bCount = dictB.ContainsKey(c) ? dictB[c] : 0;
            // Console.WriteLine(c + ": " + aCount + ", " + bCount);
            diff += Math.Abs(aCount - bCount);
        }

        return diff;
    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string a = Console.ReadLine();
        string b = Console.ReadLine();
        int res = makeAnagram(a, b);
        textWriter.WriteLine(res);
        textWriter.Flush();
        textWriter.Close();
    }
}
