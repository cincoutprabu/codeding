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
@synthesize ID, Vertices;

// Methods

- (id)initWithID:(NSString*)id {
    if ((self = [super init])) {
        self.ID = id;
        self.Vertices = [NSMutableArray new];
    }
    return self;
}

- (void)clearFlags {
    for (GraphNode *u in self.Vertices) {
        u.Color = GRAPH_NODE_COLOR_WHITE;
        u.Distance = 0;
    }
}

- (void)print {
    NSLog(@"Graph(%@): %d vertices", self.ID, (int)self.Vertices.count);
    for (GraphNode *u in self.Vertices) {
        [u print];
    }
}

@end
