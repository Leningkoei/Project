using System;

namespace _00
{
    class Program
    {
        static void Main(string[] args)
        {
            Teacher teacher0 = new Teacher();
            Student student0 = new Student();

            teacher0.CollectHomework();
            student0.CollectHomework();
        }
    }
    public class Person
    {

    }
    public class Teacher : Person, IHomeworkCollector
    {
        public void CollectHomework()
        {
            Console.WriteLine("同学们, 请教作业!");
        }
    }
    class Student : Person, IHomeworkCollector
    {
        public void CollectHomework()
        {
            Console.WriteLine("报告老师! 作业收集完毕!");
        }
    }
    public interface IHomeworkCollector
    {
        void CollectHomework();
    }
}
