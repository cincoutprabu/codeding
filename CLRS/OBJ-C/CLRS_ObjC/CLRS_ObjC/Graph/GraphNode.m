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
@synthesize Value, Char, Edges, Color, Distance, Predecessor, DiscoveredTime, FinishingTime;

// Methods
- (id)initWithValue:(int)val {
    if ((self = [super init])) {
        self.Value = val;
        self.Char = ' ';
        self.Edges = [NSMutableArray new];
        self.Color = GRAPH_NODE_COLOR_WHITE;
        self.Distance = 0;
        self.Predecessor = nil;
        self.DiscoveredTime = 0;
        self.FinishingTime = 0;
    }
    return self;
}

- (NSString*)description {
    return [NSString stringWithFormat:@"%d,%c (c: %d, d: %d, t1: %d, t2: %d)",
            self.Value, self.Char, self.Color, self.Distance,
            self.DiscoveredTime, self.FinishingTime];
}

- (void)print {
    NSString *text = [NSString stringWithFormat:@"%@: %@", self, [self.Edges componentsJoinedByString:@", "]];
    NSLog(@"%@", text);
}

@end
