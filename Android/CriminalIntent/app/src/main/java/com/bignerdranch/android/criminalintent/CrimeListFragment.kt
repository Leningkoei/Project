package com.bignerdranch.android.criminalintent

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

private const val TAG = "CrimeListFragment";    // 只要存在 const 就会被 android studio 识别为 file 而不是 class???

class CrimeListFragment : Fragment() {
    private lateinit var crimeRecyclerView: RecyclerView;   // get crime recycler view;
    private var adapter: CrimeAdapter? = null;
    // get crime list view model;
    private val crimeListViewModel: CrimeListViewModel by lazy {
        ViewModelProvider(this).get(CrimeListViewModel::class.java);
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState);

        Log.d(TAG, "Total crimes: ${this.crimeListViewModel.crimes.size}");
    }
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_crime_list, container, false);
        this.crimeRecyclerView = view.findViewById(R.id.crime_recycler_view) as RecyclerView;
        this.crimeRecyclerView.layoutManager = LinearLayoutManager(context);

        this.updateUI();

        return view;
    }

    private fun updateUI() {
        val crimes = crimeListViewModel.crimes;
        adapter = CrimeAdapter(crimes);
        this.crimeRecyclerView.adapter = adapter;
    }

    private inner class CrimeHolder(view: View) : RecyclerView.ViewHolder(view), View.OnClickListener {
        private lateinit var crime: Crime;
        // itemView 是 ViewHolder 中的1个属性;
        val titleTextView: TextView = itemView.findViewById(R.id.crime_title);
        val dateTextView: TextView = itemView.findViewById(R.id.crime_date);

        fun bind(crime: Crime) {
            this.crime = crime;
            this.titleTextView.text = this.crime.title;
            this.dateTextView.text = this.crime.date.toString();
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
