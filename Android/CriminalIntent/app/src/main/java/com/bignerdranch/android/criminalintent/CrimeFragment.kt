package com.bignerdranch.android.criminalintent

import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.CheckBox
import android.widget.EditText
import androidx.fragment.app.Fragment

class CrimeFragment : Fragment() {
    private lateinit var crime: Crime;
    private lateinit var titleField: EditText;
    private lateinit var dateButton: Button;
    private lateinit var solvedCheckBox: CheckBox;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        this.crime = Crime();
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
}
