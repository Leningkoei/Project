#   Android Instruction
##  Token
`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`

##  RecyclerView
***
MainActivity.java
```java []
public class MainActivity extents AppCompatActivity {
    private List<MyClass> data = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState0) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // TODO: 初始化 this.data;

        // 将 my adapter 绑定到 my recycler view 上;
        RecyclerView recyclerView = findViewById(R.id.my_recycler_view_id);
        MyAdapter myAdapter = new MyAdapter(this, this.data);
        recyclerView.setAdapter(myAdapter);
    }
}

```
MyAdapter.java
```java []
public class MyAdapter extends RecyclerView.Adapter<MyAdapter.MyViewHolder> {
    private Context context;
    private List<MyClass> data;

    public MyAdapter(Context context, List<MyClass> data) {
        this.context = context;
        this.data = data;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View myItemView = View.inflate(
            this.context,
            R.layout.my_item_view_id,
            null
        );   // 获得 recycler view 中的 item view;
        return new MyViewHolder(myItemView);
    }
    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        // TODO;
    }
    @Override
    public int getItemCount() {
        // TODO;
        return 0;
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            // TODO;
        }
    }
}

```
