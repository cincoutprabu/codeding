//
//  BFSOperations.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Tree.h"
#import "AdjList.h"

/*
    BFS (Breadth First Search) algorithms on Graph data structure.
 */
@interface BFSOperations : NSObject

+ (Tree*)createBFSTree:(AdjList*)g fromNode:(GraphNode*)s;
+ (NSArray*)getPath:(GraphNode*)fromNode toNode:(GraphNode*)toNode;

@end
