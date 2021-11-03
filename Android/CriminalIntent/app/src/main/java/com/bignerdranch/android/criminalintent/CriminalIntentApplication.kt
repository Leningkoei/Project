/**
 * 通过继承 Application, 得到应用的生命周期;
 * 注意要手动在 manifests/AndroidManifest.xml 中登录这个类;
 */

package com.bignerdranch.android.criminalintent

import android.app.Application

class CriminalIntentApplication : Application() {
    override fun onCreate() {
        super.onCreate();

        // 赶紧初始化 crime repository;
        CrimeRepository.initialize(this);
    }
}
