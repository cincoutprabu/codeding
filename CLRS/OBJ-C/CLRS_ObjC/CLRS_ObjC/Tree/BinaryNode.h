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
- (void)print;

+ (BinaryNode*)create:(int)val;
+ (void)printNode:(BinaryNode*)node depth:(int)depth;

@end
