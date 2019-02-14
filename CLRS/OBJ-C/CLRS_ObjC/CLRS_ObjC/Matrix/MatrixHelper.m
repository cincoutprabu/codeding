//
//  MatrixHelper.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "MatrixHelper.h"
#import "Matrix.h"
#import "ShapeFill.h"
#import "HighestPeak.h"

@implementation MatrixHelper

+ (void)testShapeFill {
    int a[] = {
        0, 0, 0, 0, 0,
        0, 0, 1, 0, 0,
        0, 1, 0, 1, 0,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        0, 1, 1, 1, 0,
        0, 0, 0, 0, 0
    };
    
    Matrix *m = [[Matrix alloc] initWithRows:7 columns:5];
    [m setData:(int*)a];
    [m print];
    
    NSLog(@"After ShapeFill:");
    [ShapeFill fillShape:m];
    [m print];
}

+ (void)testHighestPeak {
    int a[] = {
        1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1
    };
    
    Matrix *m = [[Matrix alloc] initWithRows:9 columns:9];
    [m setData:(int*)a];
    [m print];
    
    NSLog(@"After computing highest peak:");
    int peak = [HighestPeak getHighestPeak:m];
    NSLog(@"Highest Peak: %d", peak);
    [m print];
}

@end
