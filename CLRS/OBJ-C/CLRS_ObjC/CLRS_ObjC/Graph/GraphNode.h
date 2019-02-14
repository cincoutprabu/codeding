//
//  GraphNode.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef enum {
    GRAPH_NODE_COLOR_WHITE,
    GRAPH_NODE_COLOR_GRAY,
    GRAPH_NODE_COLOR_BLACK
} GRAPH_NODE_COLOR;

@interface GraphNode : NSObject

// Properties
@property (nonatomic, copy) NSString *Value;
@property (nonatomic, strong) NSMutableArray<GraphNode*> *Edges;

@property (nonatomic, assign) GRAPH_NODE_COLOR Color;
@property (nonatomic, assign) int Distance;
@property (nonatomic, strong) GraphNode *Predecessor;

@property (nonatomic, assign) int DiscoveredTime;
@property (nonatomic, assign) int FinishingTime;

// Methods
- (id)initWithValue:(NSString*)val;
- (void)print;

@end
