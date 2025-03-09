#import "Keepawake.h"
#import <UIKit/UIKit.h>

@implementation Keepawake
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(activate)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        [UIApplication sharedApplication].idleTimerDisabled = YES;
    });
}

RCT_EXPORT_METHOD(deactivate)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        [UIApplication sharedApplication].idleTimerDisabled = NO;
    });
}

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeKeepawakeSpecJSI>(params);
}
#endif

@end
