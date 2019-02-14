//
//  AdjList.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "AdjList.h"

@implementation AdjList

// Properties
@synthesize ID, Vertices, DFSTime;

// Methods

- (id)initWithID:(NSString*)id {
    if ((self = [super init])) {
        self.ID = id;
        self.Vertices = [NSMutableArray new];
        self.DFSTime = 0;
    }
    return self;
}

- (void)clearFlags {
    for (GraphNode *u in self.Vertices) {
        u.Color = GRAPH_NODE_COLOR_WHITE;
        u.Distance = 0;
        u.DiscoveredTime = 0;
        u.FinishingTime = 0;
    }
}

- (void)printGraph {
    NSLog(@"Graph(%@): %d vertices", self.ID, (int)self.Vertices.count);
    for (GraphNode *u in self.Vertices) {
        [u print];
    }
}

- (void)printVertices {
    NSLog(@"Graph(%@): %d vertices", self.ID, (int)self.Vertices.count);
    for (GraphNode *u in self.Vertices) {
        NSLog(@"%@", u);
    }
}

@end
