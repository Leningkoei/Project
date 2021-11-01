package com.bignerdranch.android.geoquiz

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.TextView
import android.widget.Toast

private const val TAG = "MainActivity"; // 这 const 和 JavaScript 也不一样阿, 全局常量🐎?
class MainActivity : AppCompatActivity() {
    private lateinit var trueButton: Button;            // clear true button;
    private lateinit var falseButton: Button;           // clear false button;
    private lateinit var questionTextView: TextView;    // clear question text view;
    private lateinit var nextButton: Button;            // clear next button;
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
    // override on create method;   -- undefined -> stop;
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Log.d(TAG, "onCreate(Bundle?) called"); // 输出提示: on create 方法已经被调用了;
        setContentView(R.layout.activity_main)
        this.trueButton = findViewById(R.id.true_button);               // get true button;
        this.falseButton = findViewById(R.id.false_button);             // get false button;
        this.questionTextView = findViewById(R.id.question_text_view);  // get question text view;
        this.nextButton = findViewById(R.id.next_button);               // get next button;
        // set true button listener;
        this.trueButton.setOnClickListener { view: View ->
//            Toast.makeText(this, R.string.correct_toast, Toast.LENGTH_SHORT).show();
            this.checkAnswer(true);
        }
        // set false button listener;
        this.falseButton.setOnClickListener { view: View -> // 头1次见 lambda function, 这写法和用法 JavaScript 的 => 也不太一样阿;
//            Toast.makeText(this, R.string.incorrect_toast, Toast.LENGTH_SHORT).show()
            this.checkAnswer(false);
        }
        // set next button listener;
        this.nextButton.setOnClickListener { view: View ->
            this.currentIndex = (this.currentIndex + 1) % questionBank.size;        // update currentIndex;
//            val questionTextResId = this.questionBank[this.currentIndex].textResId; // get 当前问题的 text res id;
//            this.questionTextView.setText(questionTextResId);                       // update question text view;
            this.updateQuestion();
        }
        // bgn set init question text view;
//        val questionTextResId = this.questionBank[this.currentIndex].textResId; // get 当前问题的 text res id;
//        this.questionTextView.setText(questionTextResId);                       // update question text view; -- set init value;
        this.updateQuestion();
        // end set init question text view;
    }
    // override on start method;    -- stop -> pause;
    override fun onStart() {
        super.onStart();
        Log.d(TAG, "onStart() called");     // 输出提示: on start 方法已经被调用了;
    }
    // override on resume method;   -- pause -> run;
    override fun onResume() {
        super.onResume();
        Log.d(TAG, "onResume() called");    // 输出提示: on resume 方法已经被调用了;
    }
    // override on pause method;    -- run -> pause;
    override fun onPause() {
        super.onPause();
        Log.d(TAG, "onPause() called");     // 输出提示: on pause 方法已经被调用了;
    }
    // override on stop method;     -- pause -> stop;
    override fun onStop() {
        super.onStop();
        Log.d(TAG, "onStop() called");      // 输出提示: on stop 方法已经被调用了;
    }
    // override on destroy method;  -- stop -> undefined;
    override fun onDestroy() {
        super.onDestroy();
        Log.d(TAG, "onDestroy() called");   // 输出提示: on destroy 方法已经被调用了;
    }
    // update question text view;
    private fun updateQuestion() {
        val questionTextResId = this.questionBank[this.currentIndex].textResId; // get 当前问题的 text res id;
        this.questionTextView.setText(questionTextResId);                       // update question text view;
    }
    // check answer;
    private fun checkAnswer(userAnswer: Boolean) {
        val correctAnswer = this.questionBank[this.currentIndex].answer;
        val messageResId = if (userAnswer == correctAnswer) {
            R.string.correct_toast
        } else {
            R.string.incorrect_toast
        }
        Toast.makeText(this, messageResId, Toast.LENGTH_SHORT).show();
    }
}
