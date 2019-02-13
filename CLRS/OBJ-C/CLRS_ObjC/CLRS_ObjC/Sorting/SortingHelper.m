//
//  SortingHelper.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 1/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "SortingHelper.h"

// NSArray category to add helper methods

@interface NSArray (ArrayHelper)
- (NSString*)dump;
@end

@implementation NSArray (ArrayHelper)
- (NSString*)dump {
    NSString *result = @"";
    for (int i = 0; i < self.count; i += 1) {
        result = [result stringByAppendingFormat:@"%d", [self[i] intValue]];
        if (i < self.count - 1) result = [result stringByAppendingString:@","];
    }
    return result;
}
@end

@interface NSMutableArray (ArrayHelper)
- (NSArray*)arrayWithIndicesFrom:(int)from to:(int)to;
@end

@implementation NSMutableArray (ArrayHelper)
- (NSArray*)arrayWithIndicesFrom:(int)from to:(int)to {
    NSMutableArray *subarray = [NSMutableArray new];
    for (int i = from; i <= to; i += 1) {
        [subarray addObject:self[i]];
    }
    return subarray;
}
@end

@implementation SortingHelper

+ (void)bubbleSort:(NSMutableArray*)a {
    for (int i = 0; i < a.count - 1; i += 1) {
        for (int j = i + 1; j < a.count; j += 1) {
            if ([a[i] intValue] > [a[j] intValue]) {
                int temp = [a[i] intValue];
                a[i] = [a[j] copy];
                a[j] = @(temp);
            }
        }
    }
}

+ (void)mergeSort:(NSMutableArray*)a {
    [SortingHelper merge:a start:0 end:(int)a.count - 1];
}

+ (void)merge:(NSMutableArray*)a start:(int)start end:(int)end {
    if (start < end) {
        // Divide
        int mid = start + (end - start) / 2;
        
        // Conquer
        [SortingHelper merge:a start:start end:mid];
        [SortingHelper merge:a start:mid + 1 end:end];
        
        // Combine
        NSArray *left = [a arrayWithIndicesFrom:start to:mid];
        NSArray *right = [a arrayWithIndicesFrom:mid + 1 to:end];
        if (left.count == 0 || right.count == 0) return;
        
        // NSLog(@"Processing from %d to %d. Mid = %d", start, end, mid);
        // NSLog(@"Current: %@, Left: %@, Right: %@", [a dump], [left dump], [right dump]);
        int i = 0, j = 0, k = start;
        while (i < left.count && j < right.count) {
            if ([left[i] intValue] > [right[j] intValue]) {
                a[k] = right[j];
                j = j + 1;
            } else {
                a[k] = left[i];
                i = i + 1;
            }
            k = k + 1;
        }
        
        while (i < left.count) {
            a[k] = left[i];
            k += 1; i += 1;
        }
        
        while (j < right.count) {
            a[k] = right[j];
            k += 1; j += 1;
        }
        // NSLog(@"After: %@, Left: %@, Right: %@", [a dump], [left dump], [right dump]);
    }
}

@end
