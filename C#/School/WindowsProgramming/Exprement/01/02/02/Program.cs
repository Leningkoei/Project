using System;

namespace _02
{
    class Program
    {
        static void Main(string[] args)
        {
            Delegate delegate0 = new Delegate();
            ClassA class_a0 = new ClassA();
            ClassB class_b0 = new ClassB();
            
            delegate0.NotifyEveryone += new Delegate.MeDelegate(class_a0.DispMethod);
            delegate0.NotifyEveryone += new Delegate.MeDelegate(class_b0.DispMethod);
            
            delegate0.Notify();

            delegate0.NotifyEveryone -= new Delegate.MeDelegate(class_a0.DispMethod);

            delegate0.Notify();
        }
    }
    class Delegate
    {
        public delegate void MeDelegate();
        public event MeDelegate NotifyEveryone;
        public void Notify()
        {
            if (NotifyEveryone != null)
            {
                Console.WriteLine("触发事件:");
                NotifyEveryone();
            }
        }
    }
    class ClassA
    {
        public void DispMethod()
        {
            Console.WriteLine("ClassA已接到NotifyEveryone事件的通知!");
        }
    }
    class ClassB
    {
        public void DispMethod()
        {
            Console.WriteLine("ClassB已接到NotifyEveryone事件的通知!");
        }
    }
}
