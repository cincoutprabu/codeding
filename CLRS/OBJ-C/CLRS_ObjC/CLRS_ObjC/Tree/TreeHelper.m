//
//  TreeHelper.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 1/14/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "TreeHelper.h"

@implementation TreeHelper

+ (int)sumOfAllNodes:(BinaryNode*)n {
    typedef void (^treeTraversalBlock)(BinaryNode*);
    treeTraversalBlock b;
    __block __weak treeTraversalBlock weakB;
    
    __block int sum = 0;
    weakB = b = ^void(BinaryNode *n) {
        sum += n.Value;
        if (n.Left != nil) weakB(n.Left);
        if (n.Right != nil) weakB(n.Right);
    };
    b(n);
    
    return sum;
}

+ (void)testBinaryTree {
    //       5
    //    3      7
    //  1   2  6   9
    
    BinaryNode *node1 = [BinaryNode create:1];
    BinaryNode *node2 = [BinaryNode create:2];
    BinaryNode *node3 = [BinaryNode create:3];
    BinaryNode *node5 = [BinaryNode create:5];
    BinaryNode *node6 = [BinaryNode create:6];
    BinaryNode *node7 = [BinaryNode create:7];
    BinaryNode *node9 = [BinaryNode create:9];
    
    node5.Left = node3;
    node5.Right = node7;
    
    node3.Left = node1;
    node3.Right = node2;
    
    node7.Left = node6;
    node7.Right = node9;
    
    BinaryNode *node5Copy = [node5 copy];
    int treeSum = [TreeHelper sumOfAllNodes:node5Copy];
    NSLog(@"TreeSum: %d", treeSum);
}

+ (void)testTree {
    TreeNode *node1 = [[TreeNode alloc] initWithValue:1];
    TreeNode *node2 = [[TreeNode alloc] initWithValue:2];
    TreeNode *node3 = [[TreeNode alloc] initWithValue:3];
    TreeNode *node4 = [[TreeNode alloc] initWithValue:4];
    TreeNode *node5 = [[TreeNode alloc] initWithValue:5];
    TreeNode *node6 = [[TreeNode alloc] initWithValue:6];
    [node1.Children addObject:node2];
    [node1.Children addObject:node3];
    [node2.Children addObject:node4];
    [node2.Children addObject:node5];
    [node3.Children addObject:node6];

    Tree *t = [[Tree alloc] initWithID:@"Tree1"];
    t.Root = node1;
    [t print];
}

@end
