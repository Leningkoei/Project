/**
 * 仓库类; -- repository: 仓库, 存储库;
 * 仓库类封装了从单个或多个数据源访问数据的1套逻辑;
 * 仓库类决定如何读取和保存数据;
 * UI代码直接从仓库获得要使用的数据, 不关心如何与数据库打交道;
 */
/**
 * 单例: 在应用进程里, 只会有1个实例;
 */

package com.bignerdranch.android.criminalintent

import android.content.Context
import androidx.lifecycle.LiveData
import androidx.room.Room
import com.bignerdranch.android.criminalintent.database.CrimeDatabase
import java.util.*

private const val DATABASE_NAME = "crime-database";

class CrimeRepository private constructor(context: Context) {
    // 配置仓库属性;
    // 保存数据库;
    private val database: CrimeDatabase = Room.databaseBuilder(
        context.applicationContext, // 传入应用上下文???? 什么翻译这是;
        CrimeDatabase::class.java,
        DATABASE_NAME
    ).build();
    // 保存 DAO 对象;
    private val crimeDao = this.database.crimeDao();

    // 添加仓库函数;
    // fun getCrimes(): List<Crime> = crimeDao.getCrimes();    // 返回所有 crime;
    fun getCrimes(): LiveData<List<Crime>> = crimeDao.getCrimes();      // get crimes from live data;
    // fun getCrime(id: UUID): Crime? = crimeDao.getCrime(id); // 返回 id === param 的 crime;
    fun getCrime(id: UUID): LiveData<Crime?> = crimeDao.getCrime(id);   // get the crime from live data;

   // private val nmsl: String = "nmsl";  // 尝试了1下, 好像确实不能通过 this 访问类中的成员; -- 纠结这些语法细节也没什么意义;
    companion object {                                  // companion object: 伴生对象(直译, 好像还挺形象的), 里面都是静态成员; -- 那这里面应该没有 this 才对阿, 还是说有个自己与类区分的 this?
        private var INSTANCE: CrimeRepository? = null;  // instance: 实例;

        // 初始化生成仓库新实例; -- 运行 activity 时就要先初始化了;
        fun initialize(context: Context) {              // initialize: 初始化;
            if (this.INSTANCE == null) {
                this.INSTANCE = CrimeRepository(context);
            }
        }
        // 读取仓库数据; -- 其实是拿到这个仓库;
        fun get(): CrimeRepository {
            // 这句话是什么意思? 简写的 return this.INSTANCE ? this.INSTANCE : throw(error); ??????
            // 查了1下, A ?: B 当 A === null 时将会返回 B, 否则返回 A; -- Kotlin 是没有3目运算符的, 用之前看到的 if else 替代了;
            return this.INSTANCE ?: throw IllegalStateException("CrimeRepository must be initialized");
        }
    }
}
