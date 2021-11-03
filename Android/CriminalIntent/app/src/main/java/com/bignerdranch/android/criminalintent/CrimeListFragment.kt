package com.bignerdranch.android.criminalintent

import android.content.Context
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import java.util.*

private const val TAG = "CrimeListFragment";    // 只要存在 const 就会被 android studio 识别为 file 而不是 class???

class CrimeListFragment : Fragment() {
    /**
     * 回调接口;
     * 将 管理调度 fragment || 决定布局依赖关系 的任务交给 宿主?activity;
     * 调用 宿主?activity 中的函数;
     * 这书的翻译?好菜阿, 这都什么跟什么, 托管和被托管的关系描述不清, 我只能自己盲猜了;
     */
    /**
     * Required interface for hosting activities;
     * 主办活动所需要的接口; -- 机翻(看来我盲猜好像猜对了)?
     */
    interface Callbacks {
        fun onCrimeSelected(crimeId: UUID);     // 话说这 Java/Kotlin 好菜阿, 这 UUID 重复导了几次了;
    }

    private var callbacks: Callbacks? = null;   // 这回调函数怎么能单独分个类的, 不是传入函数指针 + () 执行回调🐎;
    private lateinit var crimeRecyclerView: RecyclerView;   // get crime recycler view;
    // private var adapter: CrimeAdapter? = null;
    private var adapter: CrimeAdapter? = CrimeAdapter(emptyList());
    // get crime list view model;
    private val crimeListViewModel: CrimeListViewModel by lazy {
        ViewModelProvider(this).get(CrimeListViewModel::class.java);
    }

    /**
     * attach: 贴上;
     * 当 fragment 附加到 activity 时, 会调用 Fragment.onAttach(Context) 生命周期函数;
     * 把传给 onAttach() 的 Context 值保存在 this.callbacks 属性里;
     * 不如翻译成: 用 this.callback 属性 保存 传给 onAttach() 的 Context;
     */
    override fun onAttach(context: Context) {
        super.onAttach(context);
        this.callbacks = context as Callbacks?;
    }
    // override fun onCreate(savedInstanceState: Bundle?) {
    //     super.onCreate(savedInstanceState);
    //
    //     Log.d(TAG, "Total crimes: ${this.crimeListViewModel.crimes.size}");
    // }
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_crime_list, container, false);
        this.crimeRecyclerView = view.findViewById(R.id.crime_recycler_view) as RecyclerView;
        this.crimeRecyclerView.layoutManager = LinearLayoutManager(context);

        // this.updateUI();
        this.crimeRecyclerView.adapter = this.adapter;

        return view;
    }
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState);
        // LiveData.observe method 给 LiveData 实例登记观察者;
        this.crimeListViewModel.crimeListLiveData.observe(
            viewLifecycleOwner, // 指定 Observer 和 View 的生命周期一致;
            // 响应 LiveData 的新数据通知;
            Observer { crimes ->
                crimes?.let {
                    Log.i(TAG, "Got crimes ${crimes.size}");
                    updateUI(crimes);
                }
            }
        )
    }

    /**
     *  detach: 拆卸;
     *  fragment 从 activity 脱离时, 会调用 Fragment.onDetach() 生命周期函数;
     */
    override fun onDetach() {
        super.onDetach();
        this.callbacks = null;
    }

    // private fun updateUI() {
    private fun updateUI(crimes: List<Crime>) {
        // val crimes = crimeListViewModel.crimes;
        this.adapter = CrimeAdapter(crimes);
        this.crimeRecyclerView.adapter = this.adapter;
    }

    // ViewHolder 是 RecyclerView 中1个 View 的数据暂存?
    // 这 ViewHolder 到底是个啥我也搞不清了阿;
    private inner class CrimeHolder(view: View) : RecyclerView.ViewHolder(view), View.OnClickListener {
        private lateinit var crime: Crime;
        // ViewHolder 通过 itemView 属性来访问 RecyclerView 中的 View 的各个组件;
        val titleTextView: TextView = this.itemView.findViewById(R.id.crime_title);
        val dateTextView: TextView = this.itemView.findViewById(R.id.crime_date);
        val solvedImageView: ImageView = this.itemView.findViewById(R.id.crime_solved);

        // 给 CrimeHolder 的 itemView 设置点击监听器;
        // 自动执行 init 方法是 Kotlin 类的初始化步骤之一?
        init {
            this.itemView.setOnClickListener(this);
        }

        // 通过调用此 method 绑定选中的 crime 到 this.crime;
        fun bind(crime: Crime) {
            this.crime = crime;
            this.titleTextView.text = this.crime.title;
            this.dateTextView.text = this.crime.date.toString();
            this.solvedImageView.visibility = if (crime.isSolved) {
                View.VISIBLE;
            } else {
                View.GONE;
            }
        }

        override fun onClick(v: View) {
            // Toast.makeText(context, "$this.crime.title} pressed!", Toast.LENGTH_SHORT).show();
            callbacks?.onCrimeSelected(this.crime.id);   // woc这能访问到?
        }
    }   // 这俩类是怎么关联起来的呢, 下面的类为什么能访问上面类的局部变量?
    private inner class CrimeAdapter(var crimes: List<Crime>) : RecyclerView.Adapter<CrimeHolder>() {
        //                                                                           ^^^^^^^^^^^
        override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) : CrimeHolder {
            val view = layoutInflater.inflate(R.layout.list_item_crime, parent, false)
            return CrimeHolder(view);
        }
        override fun onBindViewHolder(holder: CrimeHolder, position: Int) {
            val crime = crimes[position];
            // holder.apply() {
            //     // 这个 this 是什么???????? 怎么刚好是 CrimeListFragment.CrimeHolder???????????????????
            //     this.titleTextView.text = crime.title;
            //     this.dateTextView.text = crime.date.toString();
            // }
            holder.bind(crime);
        }
        override fun getItemCount() = crimes.size;
    }

    companion object {
        fun newInstance(): CrimeListFragment {
            return CrimeListFragment();
        }
    }
}
