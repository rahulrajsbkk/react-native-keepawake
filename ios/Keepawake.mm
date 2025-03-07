#import "Keepawake.h"
#import <UIKit/UIKit.h>

@implementation Keepawake
RCT_EXPORT_MODULE()

- (void)activate {
    dispatch_async(dispatch_get_main_queue(), ^{
        [UIApplication sharedApplication].idleTimerDisabled = YES;
    });
}

- (void)deactivate {
    dispatch_async(dispatch_get_main_queue(), ^{
        [UIApplication sharedApplication].idleTimerDisabled = NO;
    });
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeKeepawakeSpecJSI>(params);
}

@end
