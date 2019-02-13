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
    GraphNode *node1 = [[GraphNode alloc] initWithValue:1];
    GraphNode *node2 = [[GraphNode alloc] initWithValue:2];
    GraphNode *node3 = [[GraphNode alloc] initWithValue:3];
    GraphNode *node4 = [[GraphNode alloc] initWithValue:4];
    GraphNode *node5 = [[GraphNode alloc] initWithValue:5];
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
    
    AdjList *g1 = [[AdjList alloc] initWithID:@"Graph1"];
    [g1.Vertices addObject:node1];
    [g1.Vertices addObject:node2];
    [g1.Vertices addObject:node3];
    [g1.Vertices addObject:node4];
    [g1.Vertices addObject:node5];
    // [g1 printGraph];
    
    // Test BFS
    // Tree *bfsTree = [BFSOperations createBFSTree:g1 fromNode:node1];
    // [bfsTree print];
    // [g1 printVertices];
    // NSArray *path = [BFSOperations getPath:node3 toNode:node1];
    // NSLog(@"Path: %@", path);
    
    // Test DFS
    GraphNode *nodeU = [[GraphNode alloc] initWithValue:0]; nodeU.Char = 'u';
    GraphNode *nodeV = [[GraphNode alloc] initWithValue:0]; nodeV.Char = 'v';
    GraphNode *nodeW = [[GraphNode alloc] initWithValue:0]; nodeW.Char = 'w';
    GraphNode *nodeX = [[GraphNode alloc] initWithValue:0]; nodeX.Char = 'x';
    GraphNode *nodeY = [[GraphNode alloc] initWithValue:0]; nodeY.Char = 'y';
    GraphNode *nodeZ = [[GraphNode alloc] initWithValue:0]; nodeZ.Char = 'z';
    [nodeU.Edges addObject:nodeV];
    [nodeU.Edges addObject:nodeX];
    [nodeV.Edges addObject:nodeY];
    [nodeW.Edges addObject:nodeY];
    [nodeW.Edges addObject:nodeZ];
    [nodeX.Edges addObject:nodeV];
    [nodeY.Edges addObject:nodeX];
    [nodeZ.Edges addObject:nodeZ];

    AdjList *g2 = [[AdjList alloc] initWithID:@"Graph2"];
    [g2.Vertices addObject:nodeU];
    [g2.Vertices addObject:nodeV];
    [g2.Vertices addObject:nodeW];
    [g2.Vertices addObject:nodeX];
    [g2.Vertices addObject:nodeY];
    [g2.Vertices addObject:nodeZ];
    [g2 printGraph];
    
    [DFSOperations dfs:g2];
    [g2 printGraph];
}

@end
