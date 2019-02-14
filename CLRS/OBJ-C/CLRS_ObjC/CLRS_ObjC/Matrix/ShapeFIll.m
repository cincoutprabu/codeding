//
//  FillAndRotate.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "ShapeFill.h"
#import "Cell.h"

@implementation ShapeFill

+ (void)fillShape:(Matrix*)m {
    Cell *center = [[Cell alloc] initWithR:m.Rows / 2 c:m.Columns / 2];
    
    NSMutableArray *stack = [NSMutableArray new];
    [stack addObject:center];
    
    while (stack.count > 0) {
        Cell *cell = [stack lastObject];
        [stack removeLastObject];
        
        // Fill shape of current cell
        [m setCellValue:cell value:1];
        
        // Check 8 neighbors
        Cell *top = [m getNeighbor:cell direction:CELL_TOP];
        if ([m getCellValue:top] == 0) [stack addObject:top];

        Cell *bottom = [m getNeighbor:cell direction:CELL_BOTTOM];
        if ([m getCellValue:bottom] == 0) [stack addObject:bottom];

        Cell *left = [m getNeighbor:cell direction:CELL_LEFT];
        if ([m getCellValue:left] == 0) [stack addObject:left];

        Cell *right = [m getNeighbor:cell direction:CELL_RIGHT];
        if ([m getCellValue:right] == 0) [stack addObject:right];

        /* Sufficient to check 4 neighbors only for shape fill.
        Cell *nw = [m getNeighbor:cell direction:CELL_NW];
        if ([m getCellValue:nw] == 0) [stack addObject:nw];

        Cell *ne = [m getNeighbor:cell direction:CELL_NE];
        if ([m getCellValue:ne] == 0) [stack addObject:ne];

        Cell *sw = [m getNeighbor:cell direction:CELL_SW];
        if ([m getCellValue:sw] == 0) [stack addObject:sw];

        Cell *se = [m getNeighbor:cell direction:CELL_SE];
        if ([m getCellValue:se] == 0) [stack addObject:se];
        */
    }
}

@end
