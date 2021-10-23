package com.recyclerviewtest.recyclerviewtest;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.RecyclerView;

public class MyAdapter extends RecyclerView.Adapter<MyAdapter.MyViewHolder> {
    Context context;
    String str[];
    int images[];
    public MyAdapter(Context context, String[] str, int images[]) {
        this.context = context;
        this.str = str;
        this.images = images;
    }
    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater = LayoutInflater.from(context);
        View view = inflater.inflate(R.layout.my_row, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.str.setText(this.str[position]);
        holder.images.setImageResource(this.images[position]);
        int thisPosition = position;
        holder.myRow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.v("tag", Integer.toString(thisPosition));
                Intent intent = new Intent(context, describeActivity.class);
                intent.putExtra("myImage", images[thisPosition]);
                context.startActivity(intent);
            }
        });
    }

    @Override
    public int getItemCount() {
        return this.images.length;
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {

        TextView str;
        ImageView images;
        ConstraintLayout myRow;
        ConstraintLayout mainActivity;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            str = itemView.findViewById(R.id.title);
            images = itemView.findViewById(R.id.icon);
            myRow = itemView.findViewById(R.id.myRow);
            mainActivity = itemView.findViewById(R.id.mainActivity);
        }
    }
}
