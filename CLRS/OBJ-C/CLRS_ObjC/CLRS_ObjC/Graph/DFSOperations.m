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
        v.Inbound += 1;
    }
    
    g.DFSTime += 1;
    node.FinishingTime = g.DFSTime;
    node.Color = GRAPH_NODE_COLOR_BLACK; // Mark as processed
    
    if (sortedResult != nil) { // Result of topological sorting
        [sortedResult insertObject:node atIndex:0];
    }
}

// Performs a topological sort on the given Graph
// and returns the sorted list (using finished-time attribute)
+ (NSArray*)topologicalSortUsingFinishedTime:(AdjList*)g {
    NSMutableArray *result = [NSMutableArray new];
    [DFSOperations dfs:g sortedResult:result];
    return result;
}

// Performs a topological sort on the given Graph
// and returns the sorted list (using inbound-count attribute).
// This is based on algorithm given in CTCI 6th Edition book page 632.
+ (NSArray*)topologicalSortUsingInboundCount:(AdjList*)g {
    NSMutableArray *result = [NSMutableArray new];
    
    // Calculate inbound-count for each node by walking thru the
    // edges of each vertex. (Alternatively a DFS can be done along
    // with marking color to make sure each node is visited once)
    for (GraphNode *u in g.Vertices) {
        for (GraphNode *v in u.Edges) {
            v.Inbound += 1;
        }
    }
    NSLog(@"After finding inbound-count:");
    [g printVertices];
    
    // Add first set of nodes with no inbound edges to a queue
    NSMutableArray *queue = [NSMutableArray new];
    for (GraphNode *u in g.Vertices) {
        if (u.Inbound == 0) {
            [queue addObject:u];
        }
    }
    
    // Identify next set of nodes by decrementing
    // inbound-count at each level/hierarchy
    while (queue.count > 0) {
        GraphNode *u = [queue objectAtIndex:0];
        [queue removeObjectAtIndex:0];
        [result addObject:u];
        
        for (GraphNode *v in u.Edges) {
            v.Inbound -= 1;
            if (v.Inbound == 0) {
                [queue addObject:v];
            }
        }
    }
    
    return result;
}

@end
