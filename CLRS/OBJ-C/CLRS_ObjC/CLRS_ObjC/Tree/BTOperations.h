//
//  BTOperations.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "BinaryNode.h"

/*
    Algorithms on Binary Tree data structure.
 */
@interface BTOperations : NSObject

+ (BOOL)isSymmetric:(BinaryNode*)node;
+ (void)invert:(BinaryNode*)node;

@end
