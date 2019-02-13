//
//  FillAndRotate.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "FillAndRotate.h"

@implementation FillAndRotate

const int ROWS = 7;
const int COLUMNS = 5;

+ (void)fillAndRotate {
    int matrix[ROWS][COLUMNS] = {
        {0, 0, 0, 0, 0},
        {0, 0, 1, 0, 0},
        {0, 1, 0, 1, 0},
        {1, 0, 0, 0, 1},
        {1, 0, 0, 0, 1},
        {0, 1, 1, 1, 0},
        {0, 0, 0, 0, 0},
    };
    
    printf("Input:\n");
    [self printMatrix:matrix];
    
    // Fill the shape
    //int filled[ROWS][COLUMNS];
    
    // Rotate the matrix
    int rotated[COLUMNS][ROWS];
    for (int i = 0; i < ROWS; i += 1) {
        for (int j = 0; j < COLUMNS; j += 1) {
            //rotated[j][i] = matrix[i][j];
            rotated[j][ROWS - i - 1] = matrix[i][j];
        }
    }
    
    printf("Rotated:\n");
    for (int i = 0; i < COLUMNS; i += 1) {
        for (int j = 0; j < ROWS; j += 1) {
            printf("%d ", rotated[i][j]);
        }
        printf("\n");
    }
}

+ (void)printMatrix:(int[ROWS][COLUMNS])m {
    for (int i = 0; i < ROWS; i += 1) {
        for (int j = 0; j < COLUMNS; j += 1) {
            printf("%d ", m[i][j]);
        }
        printf("\n");
    }
}

@end
