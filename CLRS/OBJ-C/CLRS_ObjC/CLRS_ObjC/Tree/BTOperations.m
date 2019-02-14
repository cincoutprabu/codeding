//
//  BTOperations.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "BTOperations.h"

@implementation BTOperations

+ (BOOL)isSymmetric:(BinaryNode*)node {
    return [BTOperations isSymmetricIteration:node.Left node2:node.Right];
}

+ (BOOL)isSymmetricIteration:(BinaryNode*)node1 node2:(BinaryNode*)node2 {
    if (node1 == nil && node2 == nil) return YES;
    if (node1 == nil || node2 == nil) return NO;
    
    return [BTOperations isSymmetricIteration:node1.Left node2:node2.Right] &&
           [BTOperations isSymmetricIteration:node1.Right node2:node2.Left];
}

+ (void)invert:(BinaryNode*)node {
    if (node == nil) return;
    
    [BTOperations invert:node.Left];
    [BTOperations invert:node.Right];

    // Swap left and right nodes
    if (node.Left != nil && node.Right != nil) {
        BinaryNode *temp = node.Left;
        node.Left = node.Right;
        node.Right = temp;
    }
}

@end
