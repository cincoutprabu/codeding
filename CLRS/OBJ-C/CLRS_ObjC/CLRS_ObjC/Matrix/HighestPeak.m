//
//  HighestPeak.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/14/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "HighestPeak.h"

@implementation HighestPeak

+ (int)getHighestPeak:(Matrix*)m {
    int peak = 0;
    
    for (int r = 0; r < m.Rows; r += 1) {
        for (int c = 0; c < m.Columns; c += 1) {
            int v = [m getCellValueFromRow:r c:c];
            if (v == 0) {
                NSLog(@"Processing lake at cell: %d,%d", r, c);
                [HighestPeak processLakeAtCell:m r:r c:c];
            }
        }
    }
    
    return peak;
}

+ (void)processLakeAtCell:(Matrix*)m r:(int)r c:(int)c {
    // Create a matrix for marking visited neighbors
    NSMutableSet *visited = [NSMutableSet new];
    
    // Start from the given cell and explore the cells around it
    NSMutableArray *stack = [NSMutableArray new];
    Cell *cell = [[Cell alloc] initWithR:r c:c];
    [stack addObject:cell];
    [visited addObject:cell];
    
    while (stack.count > 0) {
        Cell *current = [stack firstObject];
        [stack removeObjectAtIndex:0];
        
        [current print];
        printf(" => ");
        
        // Check 8 neighbors of current cell
        Cell *topCell = [m getNeighbor:current direction:CELL_TOP];
        if (topCell != nil) {
            [HighestPeak processCell:m visited:visited current:current neighbor:topCell stack:stack];
        }
        
        Cell *bottomCell = [m getNeighbor:current direction:CELL_BOTTOM];
        if (bottomCell != nil) {
            [HighestPeak processCell:m visited:visited current:current neighbor:bottomCell stack:stack];
        }
        
        Cell *leftCell = [m getNeighbor:current direction:CELL_LEFT];
        if (leftCell != nil) {
            [HighestPeak processCell:m visited:visited current:current neighbor:leftCell stack:stack];
        }
        
        Cell *rightCell = [m getNeighbor:current direction:CELL_RIGHT];
        if (rightCell != nil) {
            [HighestPeak processCell:m visited:visited current:current neighbor:rightCell stack:stack];
        }
        
        Cell *nwCell = [m getNeighbor:current direction:CELL_NW];
        if (nwCell != nil) {
            [HighestPeak processCell:m visited:visited current:current neighbor:nwCell stack:stack];
        }
        
        Cell *neCell = [m getNeighbor:current direction:CELL_NE];
        if (neCell != nil) {
            [HighestPeak processCell:m visited:visited current:current neighbor:neCell stack:stack];
        }
        
        Cell *swCell = [m getNeighbor:current direction:CELL_SW];
        if (swCell != nil) {
            [HighestPeak processCell:m visited:visited current:current neighbor:swCell stack:stack];
        }
        
        Cell *seCell = [m getNeighbor:current direction:CELL_SE];
        if (seCell != nil) {
            [HighestPeak processCell:m visited:visited current:current neighbor:seCell stack:stack];
        }
        
        [topCell print];
        [bottomCell print];
        [leftCell print];
        [rightCell print];
        [nwCell print];
        [neCell print];
        [swCell print];
        [seCell print];
        printf("\n");
        [m print];
    }
}

+ (void)processCell:(Matrix*)m visited:(NSMutableSet*)visited current:(Cell*)current neighbor:(Cell*)neighbor stack:(NSMutableArray*)stack {
    if (![HighestPeak isVisited:visited cell:neighbor]) {
        int currentVal = [m getCellValue:current];
        int neighborVal = [m getCellValue:neighbor];
        // NSLog(@"Current%@: %d, Neighbor%@: %d\n", current, currentVal, neighbor, neighborVal);
        if (neighborVal != 0) {
            if (neighborVal <= currentVal) {
                [m setCellValue:neighbor value:currentVal + 1];
                // NSLog(@"Incremented neighbor%@ to %d", neighbor, currentVal + 1);
            } else if (neighborVal > currentVal) {
                [m setCellValue:neighbor value:currentVal + 1];
            }
        }
        // TBD: Check if this logic is correct for multiple lakes (multiple lakes in input matrix)
        [stack addObject:neighbor];
        [visited addObject:neighbor];
    }
}

+ (BOOL)isVisited:(NSMutableSet*)visited cell:(Cell*)cell {
    for (Cell *obj in visited) {
        if ([obj isEqual:cell]) {
            return YES;
        }
    }
    return NO;
}

@end
