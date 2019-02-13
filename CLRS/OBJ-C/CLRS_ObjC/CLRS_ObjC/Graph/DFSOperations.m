//
//  DFSOperations.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "DFSOperations.h"

@implementation DFSOperations

static int dfsTime = 0;

+ (void)dfs:(AdjList*)g {
    [g clearFlags];
    dfsTime = 0;
    
    for (GraphNode *u in g.Vertices) {
        if (u.Color == GRAPH_NODE_COLOR_WHITE) {
            [DFSOperations dfsVisit:g fromNode:u];
        }
    }
}

+ (void)dfsVisit:(AdjList*)g fromNode:(GraphNode*)node {
    dfsTime += 1;
    node.DiscoveredTime = dfsTime;
    node.Color = GRAPH_NODE_COLOR_GRAY; // Mark as discovered

    for (GraphNode *v in node.Edges) {
        if (v.Color == GRAPH_NODE_COLOR_WHITE) {
            v.Distance = node.Distance + 1;
            v.Predecessor = node;
            [DFSOperations dfsVisit:g fromNode:v];
        }
    }
    
    dfsTime += 1;
    node.FinishingTime = dfsTime;
    node.Color = GRAPH_NODE_COLOR_BLACK; // Mark as processed
}

@end
