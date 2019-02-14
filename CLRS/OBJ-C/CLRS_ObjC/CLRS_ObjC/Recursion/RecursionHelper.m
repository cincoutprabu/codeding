//
//  RecursionHelper.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/14/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "RecursionHelper.h"
#import "Fibonacci.h"

@implementation RecursionHelper

+ (void)testFibonacci {
    NSLog(@"Fibonacci(10): %d", [Fibonacci fibonacciIterative:10]);
    NSLog(@"Fibonacci(10): %d", [Fibonacci fibonacciRecursive:10]);
    NSLog(@"Fibonacci(10): %d", [Fibonacci fibonacciDP:10]);
}

@end
