//
//  Matrix.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Cell.h"

typedef enum {
    CELL_TOP,
    CELL_BOTTOM,
    CELL_LEFT,
    CELL_RIGHT,
    CELL_NW,
    CELL_NE,
    CELL_SW,
    CELL_SE
} CELL_DIRECTION;

@interface Matrix : NSObject

// Properties

@property (nonatomic, assign) int Rows;
@property (nonatomic, assign) int Columns;

// Methods

- (id)initWithRows:(int)rows columns:(int)columns;
- (void)setData:(int*)data;
- (int)getCellValueFromRow:(int)r c:(int)c;
- (int)getCellValue:(Cell*)cell;
- (void)setCellValue:(Cell*)cell value:(int)value;
- (Cell*)getNeighbor:(Cell*)cell direction:(CELL_DIRECTION)direction;
- (void)clear;
- (void)print;

@end
