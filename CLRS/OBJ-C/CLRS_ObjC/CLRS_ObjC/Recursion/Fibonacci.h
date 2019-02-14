//
//  Fibonacci.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/14/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Fibonacci : NSObject

+ (int)fibonacciIterative:(int)n;
+ (int)fibonacciRecursive:(int)n;
+ (int)fibonacciDP:(int)n;

@end
