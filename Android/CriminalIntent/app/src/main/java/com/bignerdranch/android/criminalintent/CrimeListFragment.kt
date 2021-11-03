package com.bignerdranch.android.criminalintent

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

private const val TAG = "CrimeListFragment";    // 只要存在 const 就会被 android studio 识别为 file 而不是 class???

class CrimeListFragment : Fragment() {
    private lateinit var crimeRecyclerView: RecyclerView;   // get crime recycler view;
    // private var adapter: CrimeAdapter? = null;
    private var adapter: CrimeAdapter? = CrimeAdapter(emptyList());
    // get crime list view model;
    private val crimeListViewModel: CrimeListViewModel by lazy {
        ViewModelProvider(this).get(CrimeListViewModel::class.java);
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

    // private fun updateUI() {
    private fun updateUI(crimes: List<Crime>) {
        // val crimes = crimeListViewModel.crimes;
        this.adapter = CrimeAdapter(crimes);
        this.crimeRecyclerView.adapter = this.adapter;
    }

    private inner class CrimeHolder(view: View) : RecyclerView.ViewHolder(view), View.OnClickListener {
        private lateinit var crime: Crime;
        // itemView 是 ViewHolder 中的1个属性;
        val titleTextView: TextView = itemView.findViewById(R.id.crime_title);
        val dateTextView: TextView = itemView.findViewById(R.id.crime_date);
        val solvedImageView: ImageView = itemView.findViewById(R.id.crime_solved);

        // 给 CrimeHolder 的 itemView 设置点击监听器;
        init {
            itemView.setOnClickListener(this);
        }

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
            Toast.makeText(context, "$this.crime.title} pressed!", Toast.LENGTH_SHORT).show();
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
