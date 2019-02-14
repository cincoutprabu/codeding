//
//  Fibonacci.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/14/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "Fibonacci.h"

@implementation Fibonacci

+ (int)fibonacciIterative:(int)n {
    int a = 1;
    int b = 1;
    
    int i = 2, c = 0;
    while (i < n) {
        c = a + b;
        a = b;
        b = c;
        
        i += 1;
    }
    
    return c;
}

+ (int)fibonacciRecursive:(int)n {
    if (n == 1) return 1;
    if (n == 2) return 1;
    return [Fibonacci fibonacciRecursive:n - 1] + [Fibonacci fibonacciRecursive:n - 2];
}

NSMutableDictionary *fibonacciCache;

// Using DP (Dynamic Programming)
+ (int)fibonacciDP:(int)n {
    if (n == 1) return 1;
    if (n == 2) return 1;
    
    if (fibonacciCache == nil) fibonacciCache = [NSMutableDictionary new];
    if ([fibonacciCache objectForKey:@(n)] != nil) { // Retrieve from DP cache
        return [[fibonacciCache objectForKey:@(n)] intValue];
    } else {
        int result = [Fibonacci fibonacciDP:n - 1] + [Fibonacci fibonacciDP:n - 2];
        [fibonacciCache setObject:@(result) forKey:@(n)]; // Store to DP cache
        return result;
    }
}

@end
