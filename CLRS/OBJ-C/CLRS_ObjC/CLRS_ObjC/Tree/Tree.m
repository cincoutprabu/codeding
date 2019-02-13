//
//  Tree.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/12/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "Tree.h"

@implementation Tree

// Properties

@synthesize ID, Root;

// Methods

- (id)initWithID:(NSString*)id {
    if ((self = [super init])) {
        self.ID = id;
        self.Root = nil;
    }
    return self;
}

- (void)print {
    NSLog(@"Tree(%@):", self.ID);
    if (self.Root == nil) {
        NSLog(@"Root is null.");
    } else {
        [self.Root print];
    }
}

@end
