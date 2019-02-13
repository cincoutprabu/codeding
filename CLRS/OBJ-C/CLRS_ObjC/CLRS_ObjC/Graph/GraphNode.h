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
@property (nonatomic, assign) int Value;
@property (nonatomic, strong) NSMutableArray<GraphNode*> *Edges;
@property (nonatomic, assign) GRAPH_NODE_COLOR Color;
@property (nonatomic, assign) int Distance;
@property (nonatomic, strong) GraphNode *Predecessor;

// Methods
- (id)initWithValue:(int)val;
- (void)print;

@end
