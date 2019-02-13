//
//  GraphHelper.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "GraphHelper.h"

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
    
    AdjList *g = [[AdjList alloc] initWithID:@"Graph1"];
    [g.Vertices addObject:node1];
    [g.Vertices addObject:node2];
    [g.Vertices addObject:node3];
    [g.Vertices addObject:node4];
    [g.Vertices addObject:node5];
    [g print];
    
    Tree *bfsTree = [BFSOperations createBFSTree:g fromNode:node1];
    [bfsTree print];
    [g print];
    
    NSArray *path = [BFSOperations getPath:node5 toNode:node1];
    NSLog(@"Path: %@", path);
}

@end
