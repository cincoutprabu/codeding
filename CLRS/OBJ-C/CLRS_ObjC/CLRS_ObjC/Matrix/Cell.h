//
//  Cell.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Cell : NSObject

// Properties

@property (nonatomic, assign) int R;
@property (nonatomic, assign) int C;

// Methods

- (id)initWithR:(int)r c:(int)c;
- (void)print;

@end
