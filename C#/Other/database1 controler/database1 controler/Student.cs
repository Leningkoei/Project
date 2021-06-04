using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace database1_controler
{
    //      描述学生的实体类;
    public class Student
    {
        //      学号;
        public string ID {
            get;
            set;
        }
        //      姓名;
        public string Name {
            get;
            set;
        }
        //      年龄;
        public int Age {
            get;
            set;
        }
        //      系;
        public string Department {
            get;
            set;
        }
        //      班级;
        public string Class {
            get;
            set;
        }
    }
}