//
//  Matrix.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "Matrix.h"

@implementation Matrix

int a[10][10];

// Properties

@synthesize Rows, Columns;

// Methods

- (id)initWithRows:(int)rows columns:(int)columns {
    if ((self = [super init])) {
        self.Rows = rows;
        self.Columns = columns;
        [self clear];
    }
    return self;
}

- (void)setData:(int*)data {
    for (int r = 0; r < self.Rows; r += 1) {
        for (int c = 0; c < self.Columns; c += 1) {
            a[r][c] = data[r * self.Columns + c];
        }
    }
}

- (int)getCellValueFromRow:(int)r c:(int)c {
    if (r >= 0 && r <= self.Rows - 1)
        if (c >= 0 && c <= self.Columns - 1)
            return a[r][c];
    return -1;
}

- (int)getCellValue:(Cell*)cell {
    return [self getCellValueFromRow:cell.R c:cell.C];
}

- (void)setCellValue:(Cell*)cell value:(int)value {
    if (cell.R >= 0 && cell.R <= self.Rows - 1)
        if (cell.C >= 0 && cell.C <= self.Columns - 1)
            a[cell.R][cell.C] = value;
}

- (Cell*)getNeighbor:(Cell*)cell direction:(CELL_DIRECTION)direction {
    switch (direction) {
        case CELL_TOP:
            if (cell.R > 0) return [[Cell alloc] initWithR:cell.R - 1 c:cell.C];
            break;
        case CELL_BOTTOM:
            if (cell.R < self.Rows - 1) return [[Cell alloc] initWithR:cell.R + 1 c:cell.C];
            break;
        case CELL_LEFT:
            if (cell.C > 0) return [[Cell alloc] initWithR:cell.R c:cell.C - 1];
            break;
        case CELL_RIGHT:
            if (cell.C < self.Columns - 1) return [[Cell alloc] initWithR:cell.R c:cell.C + 1];
            break;
        case CELL_NW:
            if (cell.R > 0 && cell.C > 0) return [[Cell alloc] initWithR:cell.R - 1 c:cell.C - 1];
            break;
        case CELL_NE:
            if (cell.R > 0 && cell.C < self.Columns - 1) return [[Cell alloc] initWithR:cell.R - 1 c:cell.C + 1];
            break;
        case CELL_SW:
            if (cell.R < self.Rows - 1 && cell.C > 0) return [[Cell alloc] initWithR:cell.R + 1 c:cell.C - 1];
            break;
        case CELL_SE:
            if (cell.R < self.Rows - 1 && cell.C < self.Columns - 1) return [[Cell alloc] initWithR:cell.R + 1 c:cell.C + 1];
            break;
    }

    return nil;
}

- (void)clear {
    for (int r = 0; r < self.Rows; r += 1) {
        for (int c = 0; c < self.Columns; c += 1) {
            a[r][c] = 0;
        }
    }
}

- (void)print {
    for (int r = 0; r < self.Rows; r += 1) {
        for (int c = 0; c < self.Columns; c += 1) {
            printf("%d ", a[r][c]);
        }
        printf("\n");
    }
}

@end
