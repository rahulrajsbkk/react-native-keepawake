#import <React/RCTBridgeModule.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import "generated/RNKeepawakeSpec/RNKeepawakeSpec.h"
@interface Keepawake : NSObject <NativeKeepawakeSpec>
#else
@interface Keepawake : NSObject <RCTBridgeModule>
#endif

@end
