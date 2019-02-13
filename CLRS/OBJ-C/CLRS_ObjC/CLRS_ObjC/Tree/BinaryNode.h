//
//  BinaryNode.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface BinaryNode : NSObject <NSCopying>

// Properties
@property (nonatomic, assign) int Value;
@property (nonatomic, retain) BinaryNode *Left;
@property (nonatomic, retain) BinaryNode *Right;

// Methods
- (id)initWithValue:(int)val;
- (NSString*)toString;

+ (BinaryNode*)create:(int)val;

@end
