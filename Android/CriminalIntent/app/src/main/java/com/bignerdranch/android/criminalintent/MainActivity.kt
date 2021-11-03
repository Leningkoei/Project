package com.bignerdranch.android.criminalintent

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import java.util.*

private const val TAG = "MainActivity";

class MainActivity : AppCompatActivity(), CrimeListFragment.Callbacks { // 这就是传说中的接口继承🐎? 真是有够难懂的呢^^_
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

    // 实现 CrimeListFragment 的接口;
    // 点击 1条 crime 就会用 CrimeFragment 替换掉 CrimeListFragment;
    override fun onCrimeSelected(crimeId: UUID) {
        // Log.d(TAG, "MainActivity.onCrimeSelected: $crimeId");
        val fragment = CrimeFragment();
        supportFragmentManager
            .beginTransaction()
            .replace(R.id.fragment_container, fragment)
            .addToBackStack("nmsl") // push fragment into back stack; -- name: null, 是1个 String, 有没有都无所谓;
                                    //            ^^^^^^^^ 这个 fragment 指的是那个 fragment 呢? -- 额, 这 idea 自作聪明显示的 hint 打乱缩进了;
                                    // 首先怀疑书翻译描述的问题, replace() 之后是不是会返回原先的 fragment 呢, 那么 push 进 back stack 中的就是被 replace 的 fragment: CrimeListFragment,
                                    // 这样不管是从代码层面还是从应用层面都更符合直觉把;
                                    // 写 JavaScript 的时候也会遇到这种连续用到函数返回值的情况, 不过太直觉了就没仔细想过, 而且也没有拖过这么长, 这次可能是翻译的锅巴, 也有可能是我1波瞎几把分析了;
                                    // 确实这样 .commit()可能不太好解释, 不过这个可能是取决于底层 commit 和 addToBackStack 的实现了罢;
                                    // 我想的可能确实简单1点, 不过这个地方不管是怎么想都不太会影响结果, 不过 JavaScript 这样 .{Function}().{Function}().{Function}() 的调用都会是基于前面的返回值来的;
            .commit();
    }
}
