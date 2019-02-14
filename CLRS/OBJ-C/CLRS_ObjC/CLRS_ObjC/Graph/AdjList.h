//
//  AdjList.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "GraphNode.h"

/*
    Data Structure class for Adjacency-List representation of a Graph.
*/
@interface AdjList : NSObject

// Properties
@property (nonatomic, copy) NSString *ID;
@property (nonatomic, strong) NSMutableArray<GraphNode*> *Vertices;
@property (nonatomic, assign) int DFSTime; // Used in calculating discovered-time
                                           // and finished-time for each node
                                           // in the Graph

// Methods
- (id)initWithID:(NSString*)id;
- (void)clearFlags;
- (void)printGraph;
- (void)printVertices;

@end
