//
//  Tree.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "TreeNode.h"

@interface Tree : NSObject

// Properties

@property (nonatomic, copy) NSString *ID;
@property (nonatomic, strong) TreeNode *Root;

// Methods

- (id)initWithID:(NSString*)id;
- (void)print;

@end
