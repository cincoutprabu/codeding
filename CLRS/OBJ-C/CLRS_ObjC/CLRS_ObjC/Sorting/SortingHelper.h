//
//  SortingHelper.h
//  CLRS_ObjC
//
//  Created by Arumugam, Prabu on 1/13/19.
//  Copyright © 2019 Arumugam, Prabu. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface SortingHelper : NSObject

//////////
// Methods

+ (void)bubbleSort:(NSMutableArray*)a;
+ (void)mergeSort:(NSMutableArray*)a;

@end
