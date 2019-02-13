//
//  GraphNode.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "GraphNode.h"

@implementation GraphNode

// Properties
@synthesize Value, Edges, Color, Distance, Predecessor;

// Methods
- (id)initWithValue:(int)val {
    if ((self = [super init])) {
        self.Value = val;
        self.Edges = [NSMutableArray new];
        self.Color = GRAPH_NODE_COLOR_WHITE;
        self.Distance = 0;
    }
    return self;
}

- (NSString*)description {
    return [NSString stringWithFormat:@"%d (c: %d, d: %d)", self.Value, self.Color, self.Distance];
}

- (void)print {
    NSString *text = [NSString stringWithFormat:@"%@: %@", self, [self.Edges componentsJoinedByString:@", "]];
    NSLog(@"%@", text);
}

@end
