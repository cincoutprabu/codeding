//
//  TreeNode.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface TreeNode : NSObject

// Properties

@property (nonatomic, assign) int Value;
@property (nonatomic, strong) TreeNode* Parent;
@property (nonatomic, strong) NSMutableArray<TreeNode*> *Children;

// Methods

- (id)initWithValue:(int)val;
- (TreeNode*)findChildWithValue:(int)val;
- (void)print;
+ (void)printNode:(TreeNode*)node depth:(int)depth;

@end
