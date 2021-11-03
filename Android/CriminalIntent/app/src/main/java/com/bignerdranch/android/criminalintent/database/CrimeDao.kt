// 数据库表访问对象;
// 定义各种数据库操作函数的1个接口;

package com.bignerdranch.android.criminalintent.database

import androidx.lifecycle.LiveData
import androidx.room.Dao
import androidx.room.Query
import com.bignerdranch.android.criminalintent.Crime
import java.util.*

@Dao
interface CrimeDao {
    @Query("select * from crime")
    // fun getCrimes(): List<Crime>;   // 返回所有 crime;
    fun getCrimes(): LiveData<List<Crime>>;     // 将 crimes 发送给 live data;
    @Query("select * from crime where id=(:id)")
    // fun getCrime(id: UUID): Crime?  // 返回 id === param 的 crime;
    fun getCrime(id: UUID): LiveData<Crime?>;   // 将 特定的 crime 发送给 live data;
}
