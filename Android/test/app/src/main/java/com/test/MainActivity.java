package com.test;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        // 拿到文字;
        TextView msg = findViewById(R.id.textView);
        // 拿到4个按钮;
        ImageButton chatButton = findViewById(R.id.chatButton);
        ImageButton mailButton = findViewById(R.id.mailButton);
        ImageButton compassButton = findViewById(R.id.compassButton);
        ImageButton meButton = findViewById(R.id.meButton);
        // 活动图标背景颜色: 绿色, 睡眠图标背景颜色: 白色;
        int activityIconColor = Color.parseColor("green");
        int sleepIconColor = Color.parseColor("white");
        // 初始化图标背景颜色;
        chatButton.setBackgroundColor(sleepIconColor);
        mailButton.setBackgroundColor(sleepIconColor);
        compassButton.setBackgroundColor(sleepIconColor);
        meButton.setBackgroundColor(sleepIconColor);
        // chatButton点击事件;  -- 以后同一系列事件行为同此事件;
        chatButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // 改变4个按钮的背景颜色;
                chatButton.setBackgroundColor(activityIconColor);
                mailButton.setBackgroundColor(sleepIconColor);
                compassButton.setBackgroundColor(sleepIconColor);
                meButton.setBackgroundColor(sleepIconColor);
                // 改变显示文字;
                msg.setText("chat");
            }
        });
        // mailButton点击事件;
        mailButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                chatButton.setBackgroundColor(sleepIconColor);
                mailButton.setBackgroundColor(activityIconColor);
                compassButton.setBackgroundColor(sleepIconColor);
                meButton.setBackgroundColor(sleepIconColor);
                msg.setText("mail");
            }
        });
        // compassButton点击事件;
        compassButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                chatButton.setBackgroundColor(sleepIconColor);
                mailButton.setBackgroundColor(sleepIconColor);
                compassButton.setBackgroundColor(activityIconColor);
                meButton.setBackgroundColor(sleepIconColor);
                msg.setText("find");
            }
        });
        // meButton点击事件;
        meButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                chatButton.setBackgroundColor(sleepIconColor);
                mailButton.setBackgroundColor(sleepIconColor);
                compassButton.setBackgroundColor(sleepIconColor);
                meButton.setBackgroundColor(activityIconColor);
                msg.setText("me");
            }
        });
    }
}