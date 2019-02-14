//
//  BFSOperations.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "BFSOperations.h"

@implementation BFSOperations

+ (Tree*)createBFSTree:(AdjList*)g fromNode:(GraphNode*)s {
    TreeNode *root = [[TreeNode alloc] initWithValue:[s.Value intValue]];
    Tree *tree = [[Tree alloc] initWithID:@"CreateBFSResult"];
    tree.Root = root;
    
    NSMutableArray *queue = [NSMutableArray new];
    [queue addObject:s];
    
    [g clearFlags];
    TreeNode *current;
    
    while (queue.count > 0) {
        GraphNode *u = queue[0];
        [queue removeObjectAtIndex:0];
        // NSLog(@"Processing graph-node: %d", u.Value);
        
        if (u.Value == s.Value) {
            current = root;
        } else {
            current = [current findChildWithValue:[u.Value intValue]];
        }
        // NSLog(@"Current tree-node: %d", current.Value);
        
        for (GraphNode *v in u.Edges) {
            if (v.Color == GRAPH_NODE_COLOR_WHITE) {
                v.Color = GRAPH_NODE_COLOR_GRAY; // Mark as discovered
                v.Distance = u.Distance + 1;
                v.Predecessor = u;
                
                TreeNode *child = [[TreeNode alloc] initWithValue:[v.Value intValue]];
                child.Parent = current;
                [current.Children addObject:child];
                
                [queue addObject:v];
            }
        }
        
        // [tree print];
        u.Color = GRAPH_NODE_COLOR_BLACK; // Mark as processed
    }
    
    return tree;
}

+ (NSArray*)getPath:(GraphNode*)fromNode toNode:(GraphNode*)toNode {
    NSMutableArray *path = [NSMutableArray new];
    
    GraphNode *current = fromNode;
    while (current != nil) {
        [path addObject:current];
        current = current.Predecessor;
    }
    
    return path;
}

@end
