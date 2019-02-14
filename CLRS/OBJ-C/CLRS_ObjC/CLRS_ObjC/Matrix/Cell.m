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

- (void)print {
    printf("{%d,%d}", self.R, self.C);
}

- (BOOL)isEqual:(id)object {
    if ([object class] != [Cell class]) return NO;
    
    Cell *cell = (Cell*)object;
    return self.R == cell.R && self.C == cell.C;
}

- (NSString*)description {
    return [NSString stringWithFormat:@"{%d,%d}", self.R, self.C];
}

@end
