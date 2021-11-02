package com.bignerdranch.android.criminalintent

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // 将 fragment 添加给 activity;
        // val currentFragment = supportFragmentManager.findFragmentById(R.id.fragment_container);
        // if (currentFragment == null) {
        if (supportFragmentManager.findFragmentById(R.id.fragment_container) == null) { // 如果当前 support fragment manager 没有目标 fragment;
            // val fragment = CrimeFragment();
            val fragment = CrimeListFragment.newInstance();
            // 创建并提交了1个 fragment 事务;
            supportFragmentManager                      // 可以把support fragment manager 看作是1个hash map?
                .beginTransaction()                     // 创建并返回 FragmentTransaction 实例;
                .add(R.id.fragment_container, fragment) // 通过 fragment 的 res id 和 类向 fragment transaction? 中添加 fragment;
                .commit()                               // 向 support fragment manager 提交 fragment transaction?
        }
    }
}
