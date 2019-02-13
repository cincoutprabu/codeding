//
//  ArrayProblems.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 7/11/17.
//  Copyright © 2017 Arumugam, Prabu. All rights reserved.
//

#import "ArrayProblems.h"

@implementation ArrayProblems

+ (void)removeDuplicates:(NSMutableArray*)a {
    NSLog(@"Set: %@", [NSSet setWithArray:a]);
    
    int count = (int)a.count;
    for (int i = 1; i < count; i += 1) {
        /*
        BOOL found = NO;
        for (int j = 0; j < i; j += 1) {
            if (a[j] == a[i]) {
                found = YES;
                break;
            }
        }
        
         if (found) { // Shift elements forward one step starting from i
            //NSLog(@"Moving: %@ from %d", a[i], i);
            
            for (int j = i; j < count - 1; j += 1) {
                a[j] = a[j + 1];
            }
            a[count - 1] = @-1;
            count -= 1;
            
            NSLog(@"After moving: %@", a);
        }
        */
        
        while (a[i - 1] == a[i]) {
            for (int j = i; j < count - 1; j += 1) {
                a[j] = a[j + 1];
            }
            a[count - i] = @-1;
        }

        NSLog(@"When i = %d: %@", i, a);
    }
}

@end
