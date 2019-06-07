// JumpingOnClouds.cs

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
    "Jumping on Clouds" Problem Statement:

    Emma is playing a new mobile game that starts with consecutively numbered
    clouds. Some of the clouds are thunderheads and others are cumulus. She
    can jump on any cumulus cloud having a number that is equal to the number
    of the current cloud plus 1 or 2. She must avoid the thunderheads.
    Determine the minimum number of jumps it will take Emma to jump from her
    starting postion to the last cloud. It is always possible to win the game.

    For each game, Emma will get an array of clouds numbered 0 if they are safe
    or 1 if they must be avoided. For example, c = [0, 1, 0, 0, 0, 1, 0]
    indexed from 0...6. The number on each cloud is its index in the list so
    she must avoid the clouds at indexes 1 and 5. She could follow the
    following two paths: 0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6. The first
    path takes 3 jumps while the second takes 4.
 */

class Solution {

    static int jumpingOnClouds(int[] c) {
        int jumpCount = 0;

        int i = 0;
        while (i < c.Length - 1) {
            if (i + 2 < c.Length && c[i + 2] == 0) {
                i = i + 2;
                jumpCount += 1;
            } else if (c[i + 1] == 0) {
                i = i + 1;
                jumpCount += 1;
            }
        }

        return jumpCount;
    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int n = Convert.ToInt32(Console.ReadLine());
        int[] c = Array.ConvertAll(Console.ReadLine().Split(' '), cTemp => Convert.ToInt32(cTemp));

        int result = jumpingOnClouds(c);
        textWriter.WriteLine(result);
        textWriter.Flush();
        textWriter.Close();
    }
}
