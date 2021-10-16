package com.recyclerviewtest.recyclerviewtest;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    RecyclerView recyclerView;
    String programmingLanguages[];
    int images[] = {
            R.drawable.c_icon,
            R.drawable.cpp_icon,
            R.drawable.java_icon,
            R.drawable.python_icon,
            R.drawable.javascript_icon
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.recyclerView = findViewById(R.id.recyclerView);
        this.programmingLanguages = getResources().getStringArray(R.array.programming_languages);

        MyAdapter myAdapter = new MyAdapter(this, programmingLanguages, images);
        recyclerView.setAdapter(myAdapter);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
    }
}