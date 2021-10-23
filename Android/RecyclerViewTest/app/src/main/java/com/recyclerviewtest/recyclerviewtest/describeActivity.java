package com.recyclerviewtest.recyclerviewtest;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.widget.ImageView;

public class describeActivity extends AppCompatActivity {

    ImageView mainImageView;
    int myImage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_describe);

        mainImageView = findViewById(R.id.imageView);

        getData();
        setData();
    }
    private void getData() {
        if (getIntent().hasExtra("myImage")) {
            this.myImage = getIntent().getIntExtra("myImage", 1);
        }
    }
    private void setData() {
        mainImageView.setImageResource(this.myImage);
    }
}