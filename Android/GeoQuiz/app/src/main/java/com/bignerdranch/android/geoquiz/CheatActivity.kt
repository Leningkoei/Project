package com.bignerdranch.android.geoquiz

import android.app.Activity
import android.content.Context
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView

private const val EXTRA_ANSWER_IS_TRUE = "com.bignerdranch.android.geoquize.answer_is_true";    // 这个是防止 key 重名, 使用包名来命名?
const val EXTRA_ANSWER_SHOWN = "com.bignerdranch.android.geoquize.answer_shown";    // 全局常量?

class CheatActivity : AppCompatActivity() {
    private var answerIsTrue = false;

    private lateinit var answerTextView: TextView;
    private lateinit var showAnswerButton: Button;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cheat)

        // 话说为啥要命名为 answerIsTrue? 还有那个 QuizViewModel 的含义我也不是很懂... <- 没过英语4级阿确实;
        this.answerIsTrue = intent.getBooleanExtra(EXTRA_ANSWER_IS_TRUE, false);    // 以 boolean 的类型获取 key 的 value;
        this.answerTextView = findViewById(R.id.answer_text_view);
        this.showAnswerButton = findViewById(R.id.show_answer_button);

        this.showAnswerButton.setOnClickListener() { view: View ->
            val answerText = when {
                this.answerIsTrue -> R.string.true_button;
                else -> R.string.false_button;
            }
            this.answerTextView.setText(answerText);
            // 发送消息;
            this.setAnswerShownResult(true);
        }
    }

    // 有.难懂;
    companion object {
        fun newIntent(packageContext: Context, answerIsTrue: Boolean): Intent {
            return Intent(packageContext, CheatActivity::class.java).apply {
                putExtra(EXTRA_ANSWER_IS_TRUE, answerIsTrue);
                // more putExtra(key: String, value: Any);
            }
        }
    }

    // 给 MainActivity 传递是否作弊;
    private fun setAnswerShownResult(isAnswerShown: Boolean) {
        val data = Intent().apply {
            putExtra(EXTRA_ANSWER_SHOWN, isAnswerShown);
        }
        setResult(Activity.RESULT_OK, data);
    }
}
