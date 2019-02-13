//
//  BinaryNode.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "BinaryNode.h"

@implementation BinaryNode

// Properties
@synthesize Value, Left, Right;

// Methods

- (id)initWithValue:(int)val {
    if ((self = [super init])) {
        self.Value = val;
        self.Left = nil;
        self.Right = nil;
    }
    return self;
}

- (NSString*)toString {
    return [NSString stringWithFormat:@"%d", self.Value];
}

+ (BinaryNode*)create:(int)val {
    return [[BinaryNode alloc] initWithValue:val];
}

- (BOOL)isEqual:(id)object {
    if (self == object) return YES;
    if ([self class] == [object class]) return YES;
    
    BinaryNode *n = (BinaryNode*)object;
    return self.Value == n.Value;
}

- (id)copyWithZone:(NSZone*)zone {
    BinaryNode *newNode = [[BinaryNode allocWithZone:zone] init];
    newNode.Value = self.Value;
    newNode.Left = [self.Left copy];
    newNode.Right = [self.Right copy];
    return newNode;
}

- (void)dealloc {
}

@end
