//
//  HighestPeak.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 2/14/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Matrix.h"

/*
    Find highest peak in a matrix of 0s and 1s, where 1 represents land
    and 0 represents water. Land around water gets higher and higher as
    we move away from the water. And there can be multiple water cells.
 */
@interface HighestPeak : NSObject

+ (int)getHighestPeak:(Matrix*)m;

@end
