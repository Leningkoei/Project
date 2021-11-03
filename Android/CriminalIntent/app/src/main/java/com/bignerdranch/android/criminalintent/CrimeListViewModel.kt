package com.bignerdranch.android.criminalintent

import androidx.lifecycle.ViewModel

class CrimeListViewModel : ViewModel() {
    // val crimes = mutableListOf<Crime>();
    // init {
    //     for (i in 0 until 100) {
    //         val crime = Crime();            // 创建1个 Crime 类型的对象;
    //         crime.title = "Crime #$i";
    //         crime.isSolved = i % 2 == 0;
    //         this.crimes += crime;
    //     }
    // }

    // 通过数据库访问 crimes;
    private val crimeRepository = CrimeRepository.get();        // get database repository;
    // val crimes = this.crimeRepository.getCrimes();
    val crimeListLiveData = this.crimeRepository.getCrimes();   // get crimes from live data;
}
