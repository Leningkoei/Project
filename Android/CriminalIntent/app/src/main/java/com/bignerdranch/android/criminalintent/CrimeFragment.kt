package com.bignerdranch.android.criminalintent

import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.CheckBox
import android.widget.EditText
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.Observer
import java.util.*

private const val TAG = "CrimeFragment";
private const val ARG_CRIME_ID = "crime_id";

class CrimeFragment : Fragment() {
    private lateinit var crime: Crime;
    private lateinit var titleField: EditText;
    private lateinit var dateButton: Button;
    private lateinit var solvedCheckBox: CheckBox;
    // 关联 CrimeFragment 和 CrimeDetailViewModel;
    private val crimeDetailViewModel: CrimeDetailViewModel by lazy {
        ViewModelProvider(this).get(CrimeDetailViewModel::class.java);
    }

    companion object {
        fun newInstance(crimeId: UUID): CrimeFragment {
            // argument bundle 实例;
            val arguments = Bundle().apply {
                this.putSerializable(ARG_CRIME_ID, crimeId);
            }
            // 将 argument bundle 实例附加给 fragment 实例;
            return CrimeFragment().apply {
                this.arguments = arguments;
            }
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        this.crime = Crime();
        val crimeId: UUID = arguments?.getSerializable(ARG_CRIME_ID) as UUID;
        // Log.d(TAG, "args bundle crime ID: $crimeId");
        // // Eventually, load crime from database;
        this.crimeDetailViewModel.loadCrime(crimeId);
    }
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // return super.onCreateView(inflater, container, savedInstanceState)
        val view = inflater.inflate(R.layout.fragment_crime, container, false);

        this.titleField = view.findViewById(R.id.crime_title) as EditText;
        this.dateButton = view.findViewById(R.id.crime_date) as Button;
        this.solvedCheckBox = view.findViewById(R.id.crime_solved) as CheckBox;

        this.dateButton.apply() {
            this.text = crime.date.toString();
            this.isEnabled = false;
        }

        return view;
        // return inflater.inflate(R.layout.fragment_crime, container, false);
    }
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState);
        this.crimeDetailViewModel.crimeLiveData.observe(
            this.viewLifecycleOwner,
            Observer { crime ->
                crime?.let {
                    this.crime = crime;
                    this.updateUI();
                }
            }
        )
    }
    override fun onStart() {
        super.onStart()

        val titleWatcher = object: TextWatcher { // this: EditText;
            override fun beforeTextChanged(
                sequence: CharSequence?,
                start: Int,
                count: Int,
                after: Int
            ) {
                // This space intentionally left blank;
            }
            override fun onTextChanged(
                sequence: CharSequence?,    // 用户输入;
                start: Int,
                before: Int,
                count: Int
            ) {
                crime.title = sequence.toString();
            }
            override fun afterTextChanged(
                sequence: Editable?
            ) {
                // This space intentionally left blank;
            }
        }
        this.titleField.addTextChangedListener(titleWatcher);
        this.solvedCheckBox.apply() {
            setOnCheckedChangeListener { _, isChecked ->
                crime.isSolved = isChecked;
            }
        }
    }

    private fun updateUI() {
        this.titleField.setText(this.crime.title);
        this.dateButton.text = this.crime.date.toString();
        this.solvedCheckBox.isChecked = this.crime.isSolved;
    }
}
