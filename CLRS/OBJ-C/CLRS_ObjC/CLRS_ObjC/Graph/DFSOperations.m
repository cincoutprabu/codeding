//
//  DFSOperations.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "DFSOperations.h"

@implementation DFSOperations

+ (void)dfs:(AdjList*)g sortedResult:(NSMutableArray*)sortedResult {
    [g clearFlags];
    g.DFSTime = 0;
    
    for (GraphNode *u in g.Vertices) {
        if (u.Color == GRAPH_NODE_COLOR_WHITE) {
            [DFSOperations dfsVisit:g fromNode:u sortedResult:sortedResult];
        }
    }
}

+ (void)dfsVisit:(AdjList*)g fromNode:(GraphNode*)node sortedResult:(NSMutableArray*)sortedResult {
    g.DFSTime += 1;
    node.DiscoveredTime = g.DFSTime;
    node.Color = GRAPH_NODE_COLOR_GRAY; // Mark as discovered

    for (GraphNode *v in node.Edges) {
        if (v.Color == GRAPH_NODE_COLOR_WHITE) {
            v.Distance = node.Distance + 1;
            v.Predecessor = node;
            [DFSOperations dfsVisit:g fromNode:v sortedResult:sortedResult];
        }
    }
    
    g.DFSTime += 1;
    node.FinishingTime = g.DFSTime;
    node.Color = GRAPH_NODE_COLOR_BLACK; // Mark as processed
    
    if (sortedResult != nil) {
        [sortedResult insertObject:node atIndex:0];
    }
}

// Performs a topological sort on the given Graph
// and returns the sorted list
+ (NSArray*)topologicalSort:(AdjList*)g {
    NSMutableArray *result = [NSMutableArray new];
    [DFSOperations dfs:g sortedResult:result];
    return result;
}

@end
