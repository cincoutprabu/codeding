//
//  TreeHelper.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 1/14/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "BinaryNode.h"
#import "TreeNode.h"
#import "Tree.h"
#import "BTOperations.h"

@interface TreeHelper : NSObject

+ (int)sumOfAllNodes:(BinaryNode*)n;
+ (void)testBinaryTree;
+ (void)testBTSymmetric;
+ (void)testTree;

@end
