// RansomNote.cs

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
    "Ransom Note" Problem Statement:

    Imagine a kidnapper who wrote a ransom note, but now he is worried it will
    be traced back to him through his handwriting. He found a magazine and
    wants to know if he can cut out whole words from it and use them to create
    an untraceable replica of his ransom note. The words in his note are
    case-sensitive and he must use only whole words available in the magazine.
    He cannot use substrings or concatenation to create the words he needs.

    Given the words in the magazine and the words in the ransom note, print Yes
    if he can replicate his ransom note exactly using whole words from the
    magazine; otherwise, print No.

    For example, the note is "Attack at dawn". The magazine contains only
    "attack at dawn". The magazine has all the right words, but there's a case
    mismatch. The answer is No.
 */

class Solution {

    static void checkMagazine(string[] magazine, string[] note) {
        Dictionary<string, int> noteCount = new Dictionary<string, int>();
        foreach (string n in note) {
            if (noteCount.ContainsKey(n)) {
                noteCount[n] += 1;
            } else {
                noteCount.Add(n, 1);
            }
        }

        foreach (string n in noteCount.Keys) {
            int foundCount = magazine.Count(w => w == n);
            if (foundCount < noteCount[n]) {
                Console.WriteLine("No");
                return;
            }
        }

        Console.WriteLine("Yes");
    }

    static void Main(string[] args) {
        string[] mn = Console.ReadLine().Split(' ');
        int m = Convert.ToInt32(mn[0]);
        int n = Convert.ToInt32(mn[1]);

        string[] magazine = Console.ReadLine().Split(' ');
        string[] note = Console.ReadLine().Split(' ');
        checkMagazine(magazine, note);
    }
}
