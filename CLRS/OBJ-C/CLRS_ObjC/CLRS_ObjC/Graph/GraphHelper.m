//
//  GraphHelper.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "GraphHelper.h"
#import "BFSOperations.h"
#import "DFSOperations.h"

@implementation GraphHelper

+ (void)testBFS {
    GraphNode *node1 = [[GraphNode alloc] initWithValue:@"1"];
    GraphNode *node2 = [[GraphNode alloc] initWithValue:@"2"];
    GraphNode *node3 = [[GraphNode alloc] initWithValue:@"3"];
    GraphNode *node4 = [[GraphNode alloc] initWithValue:@"4"];
    GraphNode *node5 = [[GraphNode alloc] initWithValue:@"5"];
    [node1.Edges addObject:node2];
    [node1.Edges addObject:node5];
    [node2.Edges addObject:node1];
    [node2.Edges addObject:node5];
    [node2.Edges addObject:node3];
    [node2.Edges addObject:node4];
    [node3.Edges addObject:node2];
    [node3.Edges addObject:node4];
    [node4.Edges addObject:node2];
    [node4.Edges addObject:node5];
    [node4.Edges addObject:node3];
    [node5.Edges addObject:node4];
    [node5.Edges addObject:node1];
    [node5.Edges addObject:node2];
    
    AdjList *g = [[AdjList alloc] initWithID:@"Graph1"];
    [g.Vertices addObject:node1];
    [g.Vertices addObject:node2];
    [g.Vertices addObject:node3];
    [g.Vertices addObject:node4];
    [g.Vertices addObject:node5];
    [g printGraph];
    
    // Test BFS
    Tree *bfsTree = [BFSOperations createBFSTree:g fromNode:node1];
    [bfsTree print];
    [g printVertices];
    NSArray *path = [BFSOperations getPath:node3 toNode:node1];
    NSLog(@"Path: %@", path);
}

+ (void)testDFS {
    GraphNode *nodeU = [[GraphNode alloc] initWithValue:@"u"];
    GraphNode *nodeV = [[GraphNode alloc] initWithValue:@"v"];
    GraphNode *nodeW = [[GraphNode alloc] initWithValue:@"w"];
    GraphNode *nodeX = [[GraphNode alloc] initWithValue:@"x"];
    GraphNode *nodeY = [[GraphNode alloc] initWithValue:@"y"];
    GraphNode *nodeZ = [[GraphNode alloc] initWithValue:@"z"];
    [nodeU.Edges addObject:nodeV];
    [nodeU.Edges addObject:nodeX];
    [nodeV.Edges addObject:nodeY];
    [nodeW.Edges addObject:nodeY];
    [nodeW.Edges addObject:nodeZ];
    [nodeX.Edges addObject:nodeV];
    [nodeY.Edges addObject:nodeX];
    [nodeZ.Edges addObject:nodeZ];
    
    // Test DFS
    AdjList *g = [[AdjList alloc] initWithID:@"Graph2"];
    [g.Vertices addObject:nodeU];
    [g.Vertices addObject:nodeV];
    [g.Vertices addObject:nodeW];
    [g.Vertices addObject:nodeX];
    [g.Vertices addObject:nodeY];
    [g.Vertices addObject:nodeZ];
    [g printGraph];
    
    [DFSOperations dfs:g sortedResult:nil];
    [g printGraph];
}

+ (void)testTopologicalSort {
    // Graph example from Figure 22.7 on CLRS book page 613.
    GraphNode *node_undershorts = [[GraphNode alloc] initWithValue:@"undershorts"];
    GraphNode *node_pants = [[GraphNode alloc] initWithValue:@"pants"];
    GraphNode *node_belt = [[GraphNode alloc] initWithValue:@"belt"];
    GraphNode *node_shirt = [[GraphNode alloc] initWithValue:@"shirt"];
    GraphNode *node_tie = [[GraphNode alloc] initWithValue:@"tie"];
    GraphNode *node_jacket = [[GraphNode alloc] initWithValue:@"jacket"];
    GraphNode *node_socks = [[GraphNode alloc] initWithValue:@"socks"];
    GraphNode *node_shoes = [[GraphNode alloc] initWithValue:@"shoes"];
    GraphNode *node_watch = [[GraphNode alloc] initWithValue:@"watch"];
    [node_undershorts.Edges addObject:node_pants];
    [node_undershorts.Edges addObject:node_shoes];
    [node_pants.Edges addObject:node_belt];
    [node_pants.Edges addObject:node_shoes];
    [node_belt.Edges addObject:node_jacket];
    [node_shirt.Edges addObject:node_belt];
    [node_shirt.Edges addObject:node_tie];
    [node_tie.Edges addObject:node_jacket];
    [node_socks.Edges addObject:node_shoes];
    
    AdjList *g = [[AdjList alloc] initWithID:@"Graph3"];
    [g.Vertices addObject:node_undershorts];
    [g.Vertices addObject:node_pants];
    [g.Vertices addObject:node_belt];
    [g.Vertices addObject:node_shirt];
    [g.Vertices addObject:node_tie];
    [g.Vertices addObject:node_jacket];
    [g.Vertices addObject:node_socks];
    [g.Vertices addObject:node_shoes];
    [g.Vertices addObject:node_watch];
    [g printGraph];
    
    // Perform topological sorting on the given graph
    // NSArray *sorted = [DFSOperations topologicalSortUsingFinishedTime:g];
    NSArray *sorted = [DFSOperations topologicalSortUsingInboundCount:g];
    NSLog(@"Sorted: %@", sorted);
}

@end
