// 负责 Crime 对象 和 database 进行交互时的类型转换的类;

package com.bignerdranch.android.criminalintent.database

import androidx.room.TypeConverter
import java.util.*

class CrimeTypeConverters {
    // date input to database;
    @TypeConverter
    fun fromDate(date: Date?): Long? {
        return date?.time;
    }
    // date output from database;
    @TypeConverter
    fun toDate(millisSinceEpoch: Long): Date? {
        // return millisSinceEpoch?.let {
        //     Date(it);
        // }
        return Date(millisSinceEpoch)
    }
    // uuid input to database;
    @TypeConverter
    fun fromUUID(uuid: UUID?): String? {
        return uuid?.toString();
    }
    // uuid output from database;
    @TypeConverter
    fun toUUID(uuid: String?): UUID? {
        return UUID.fromString(uuid);
    }
}
