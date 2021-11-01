// 将 MainActivity 的 UI 状态保存在这里;
package com.bignerdranch.android.geoquiz

import android.util.Log
import androidx.lifecycle.ViewModel

private const val TAG = "QuizViewModel";

class QuizViewModel : ViewModel() {
    // set init method; -- callback before it be created;
    init {
        Log.d(TAG, "ViewModel instance created");
    }
    // override on cleared method; -- callback before it be destroy;
    override fun onCleared() {
        super.onCleared();
        Log.d(TAG, "ViewModel instance about to be destroyed");
    }

    // set question bank;
    private val questionBank = listOf(
        Question(R.string.question_australia, true),
        Question(R.string.question_oceans, true),
        Question(R.string.question_mideast, false),
        Question(R.string.question_africa, false),
        Question(R.string.question_america, true),
        Question(R.string.question_asia, true)
    )
    private var currentIndex = 0;   // set init currentIndex;
    var isCheater = false;

    // 计算属性??? 怎么没 set 阿;
    val currentQuestionAnswer: Boolean
        get() = this.questionBank[this.currentIndex].answer;
    val currentQuestionText: Int
        get() = this.questionBank[this.currentIndex].textResId;

    fun moveToNext () {
        this.currentIndex = (this.currentIndex + 1) % this.questionBank.size;
    }
}
