package com.bignerdranch.android.geoquiz

import android.app.Activity
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.lifecycle.ViewModelProvider

private const val TAG = "MainActivity"; // 这 const 和 JavaScript 也不一样阿, 全局常量🐎?
private const val REQUEST_CODE_CHEAT = 0;

class MainActivity : AppCompatActivity() {
    private lateinit var trueButton: Button;            // clear true button;
    private lateinit var falseButton: Button;           // clear false button;
    private lateinit var questionTextView: TextView;    // clear question text view;
    private lateinit var cheatButton: Button;           // clear cheat button;
    private lateinit var nextButton: Button;            // clear next button;

    // 惰性初始化 QuizViewModel;
    private val quizViewModel: QuizViewModel by lazy {
        ViewModelProvider(this).get(QuizViewModel::class.java);
    }

    // // set question bank;
    // private val questionBank = listOf(
    //     Question(R.string.question_australia, true),
    //     Question(R.string.question_oceans, true),
    //     Question(R.string.question_mideast, false),
    //     Question(R.string.question_africa, false),
    //     Question(R.string.question_america, true),
    //     Question(R.string.question_asia, true)
    // )
    // private var currentIndex = 0;   // set init currentIndex;

    // override on create method;   -- undefined -> stop;
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Log.d(TAG, "onCreate(Bundle?) called"); // 输出提示: on create 方法已经被调用了;
        setContentView(R.layout.activity_main)
        // // val provider: ViewModelProvider = ViewModelProviders.of(this);   -- ViewModelProviders 弃用力;
        // // val quizViewModel: QuizViewModel = ViewModelProvider.AndroidViewModelFactory(application).create(QuizViewModel::class.java);
        // val quizViewModel: QuizViewModel = ViewModelProvider(this).get(QuizViewModel::class.java);  // 访问 ViewModel; -- 似乎和上面1行等效?
        // Log.d(TAG, "Got a QuizViewModel: $quizViewModel");

        // get some element;
        this.trueButton = findViewById(R.id.true_button);               // get true button;
        this.falseButton = findViewById(R.id.false_button);             // get false button;
        this.questionTextView = findViewById(R.id.question_text_view);  // get question text view;
        this.cheatButton = findViewById(R.id.cheat_button);             // get cheat button;
        this.nextButton = findViewById(R.id.next_button);               // get next button;

        // set true button listener;
        this.trueButton.setOnClickListener { view: View ->
            // Toast.makeText(this, R.string.correct_toast, Toast.LENGTH_SHORT).show();
            this.checkAnswer(true);
        }
        // set false button listener;
        this.falseButton.setOnClickListener { view: View -> // 头1次见 lambda function, 这写法和用法 JavaScript 的 => 也不太一样阿;
            // Toast.makeText(this, R.string.incorrect_toast, Toast.LENGTH_SHORT).show()
            this.checkAnswer(false);
        }
        // set cheat button listener;
        this.cheatButton.setOnClickListener() { view: View ->
            // start cheat activity;
            // Intent(packageContext: Context, class: Class<?>);
            // val intent = Intent(this, CheatActivity::class.java);
            val answerIsTrue = this.quizViewModel.currentQuestionAnswer;    // 获得该题的正确答案;
            // 居然在 MainActivity 中调用 CheatActivity 的方法启动 CheatActivity?
            val intent = CheatActivity.newIntent(this@MainActivity, answerIsTrue);  // 将 Content 和 正确答案 传递给 cheat activity; -- @后跟的是注释?
            // startActivity(intent);
            startActivityForResult(intent, REQUEST_CODE_CHEAT); // md, 更新的方法看上去好难, 没 Kotlin 基础看不懂阿这;
        }
        // set next button listener;
        this.nextButton.setOnClickListener { view: View ->
            // this.currentIndex = (this.currentIndex + 1) % questionBank.size;        // update currentIndex;
            // // val questionTextResId = this.questionBank[this.currentIndex].textResId; // get 当前问题的 text res id;
            // // this.questionTextView.setText(questionTextResId);                       // update question text view;
            this.quizViewModel.moveToNext();    // 通过 quiz view model 更新 current index;
            this.updateQuestion();
        }

        // bgn set init question text view;
        // val questionTextResId = this.questionBank[this.currentIndex].textResId; // get 当前问题的 text res id;
        // this.questionTextView.setText(questionTextResId);                       // update question text view; -- set init value;
        this.updateQuestion();
        // end set init question text view;
    }

    // // override on start method;    -- stop -> pause;
    // override fun onStart() {
    //     super.onStart();
    //     Log.d(TAG, "onStart() called");     // 输出提示: on start 方法已经被调用了;
    // }
    // // override on resume method;   -- pause -> run;
    // override fun onResume() {
    //     super.onResume();
    //     Log.d(TAG, "onResume() called");    // 输出提示: on resume 方法已经被调用了;
    // }
    // // override on pause method;    -- run -> pause;
    // override fun onPause() {
    //     super.onPause();
    //     Log.d(TAG, "onPause() called");     // 输出提示: on pause 方法已经被调用了;
    // }
    // // override on stop method;     -- pause -> stop;
    // override fun onStop() {
    //     super.onStop();
    //     Log.d(TAG, "onStop() called");      // 输出提示: on stop 方法已经被调用了;
    // }
    // // override on destroy method;  -- stop -> undefined;
    // override fun onDestroy() {
    //     super.onDestroy();
    //     Log.d(TAG, "onDestroy() called");   // 输出提示: on destroy 方法已经被调用了;
    // }

    // get check activity respond;
    override fun onActivityResult(
        requestCode: Int,
        resultCode: Int,
        data: Intent?
    ) {
        if (resultCode != Activity.RESULT_OK) {
            return;
        } else {
            if (requestCode == REQUEST_CODE_CHEAT) {
                this.quizViewModel.isCheater = data?.getBooleanExtra(EXTRA_ANSWER_SHOWN, false)?: false;
            }
        }
    }

    // update question text view;
    private fun updateQuestion() {
        // val questionTextResId = this.questionBank[this.currentIndex].textResId; // get 当前问题的 text res id;
        val questionTextResId = quizViewModel.currentQuestionText;              // 通过 quiz view model 的计算属性 update question text res id;
        this.questionTextView.setText(questionTextResId);                       // update question text view;
    }

    // check answer;
    private fun checkAnswer(userAnswer: Boolean) {
        // val correctAnswer = this.questionBank[this.currentIndex].answer;
        val correctAnswer = this.quizViewModel.currentQuestionAnswer;   // get 当前 question current answer by quiz view model 的计算属性;
        // 判断答案是否正确;
        val messageResId = if (userAnswer == correctAnswer) {
            R.string.correct_toast
        } else {
            R.string.incorrect_toast
        }
        Toast.makeText(this, messageResId, Toast.LENGTH_SHORT).show();  // 展示答案;
    }

}
