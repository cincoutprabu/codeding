//
//  DFSOperations.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Tree.h"
#import "AdjList.h"

/*
 Helper class for implementing DFS (Depth First Search) algorithms.
 */
@interface DFSOperations : NSObject

+ (void)dfs:(AdjList*)g sortedResult:(NSMutableArray*)sortedResult;
+ (void)dfsVisit:(AdjList*)g fromNode:(GraphNode*)node sortedResult:(NSMutableArray*)sortedResult;
+ (NSArray*)topologicalSortUsingFinishedTime:(AdjList*)g;
+ (NSArray*)topologicalSortUsingInboundCount:(AdjList*)g;

@end
