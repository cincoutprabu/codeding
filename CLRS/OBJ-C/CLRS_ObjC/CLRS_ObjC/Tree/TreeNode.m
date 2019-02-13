//
//  TreeNode.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "TreeNode.h"

@implementation TreeNode

// Properties

@synthesize Value, Parent, Children;

// Methods

- (id)initWithValue:(int)val {
    if ((self = [super init])) {
        self.Value = val;
        self.Parent = nil;
        self.Children = [NSMutableArray new];
    }
    return self;
}

- (TreeNode*)findChildWithValue:(int)val {
    TreeNode *found = nil;
    for (TreeNode *child in self.Children) {
        if (child.Value == val) {
            found = child;
            break;
        }
    }
    return found;
}

- (void)print {
    [TreeNode printNode:self depth:0];
}

+ (void)printNode:(TreeNode*)node depth:(int)depth {
    NSString *line = [@"" stringByPaddingToLength:depth * 2 withString:@"--" startingAtIndex:0];
    NSLog(@"%@%d", line, node.Value);
    
    for (TreeNode *child in node.Children) {
        [TreeNode printNode:child depth:depth + 1];
    }
}

@end
