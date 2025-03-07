package com.keepawake

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import android.view.WindowManager
import android.app.Activity
import com.facebook.react.bridge.ReactMethod

@ReactModule(name = KeepawakeModule.NAME)
class KeepawakeModule(reactContext: ReactApplicationContext) :
  NativeKeepawakeSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  override fun activate() {
    val activity = currentActivity
    activity?.runOnUiThread {
      activity.window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
    }
  }

  @ReactMethod
  override fun deactivate() {
    val activity = currentActivity
    activity?.runOnUiThread {
      activity.window.clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
    }
  }

  companion object {
    const val NAME = "Keepawake"
  }
}
