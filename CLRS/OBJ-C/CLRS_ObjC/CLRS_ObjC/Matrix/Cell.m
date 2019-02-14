//
//  Cell.m
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import "Cell.h"

@implementation Cell

// Properties

@synthesize R, C;

// Methods

- (id)initWithR:(int)r c:(int)c {
    if ((self = [super init])) {
        self.R = r;
        self.C = c;
    }
    return self;
}

@end
