using System;

namespace CreadCard
{
    class Program
    {
        static void Main(string[] args)
        {
            //  声明此时时间
            int this_time;
            //  新建1个???
            Repay repay0 = new Repay();
            //  新建1个人person0
            Person person0 = new Person("person0");
            //  新建1个人person1
            Person person1 = new Person("person1");

            //  定义1个函数还钱还是不还钱: 判断this_person的this_cread_card此时是否该还钱了
            void RepayOrNotRepay(Person this_person, CreadCard this_cread_card)
            {
                if (this_time == this_cread_card.repay_time)
                {
                    Console.WriteLine($"{this_cread_card.person_name}的cread card还钱了哦");
                    repay0.CreCardDebtPeople += new Repay.CreCardRepay(this_cread_card.CreCardRepay);
                    repay0.CreCardRepayEvent(this_person);
                }

            }
            //  定义1个函数输出信息: 输出此时this_person和this_cread_card的信息
            void DisplayInformation(Person this_person, CreadCard this_cread_card)
            {
                Console.WriteLine(">============");
                Console.WriteLine($"在{this_time}时:");

                Console.WriteLine("this person:");
                this_person.DisplayPerson();
                Console.WriteLine("this cread card:");
                this_cread_card.DisplayCreCard();

                Console.WriteLine(">============");
            }

            //  定义此时时间 = 0
            this_time = 0;
            //  person0新建1个信用卡cread_card0
            CreadCard cread_card0 = new CreadCard(person0, this_time);
            //  判断此时creadcard_0是否该还钱
            RepayOrNotRepay(person0, cread_card0);
            //  输出此时person_0和cread_card_0的信息
            DisplayInformation(person0, cread_card0);

            //  定义此时时间 = 1
            this_time = 1;
            //  person0新建1个信用卡cread_card1
            CreadCard cread_card1 = new CreadCard(person0, this_time);
            //  判断此时cread_card0是否该还钱
            RepayOrNotRepay(person0, cread_card0);
            //  判断此时cread_card1是否该还钱
            RepayOrNotRepay(person0, cread_card1);
            //  输出此时person0和cread_card0的信息
            DisplayInformation(person0, cread_card0);
            //  输出此时person1和cread_card1的信息
            DisplayInformation(person0, cread_card1);

            //  定义此时时间 = 3
            this_time = 3;
            //  person1新建1个信用卡cread_card2
            CreadCard cread_card2 = new CreadCard(person1, this_time);
            //  判断此时cread_card0是否该还钱
            RepayOrNotRepay(person0, cread_card0);
            //  判断此时cread_card1是否该还钱
            RepayOrNotRepay(person0, cread_card1);
            //  判断此时cread_card2是否该还钱
            RepayOrNotRepay(person1, cread_card2);
            //  输出此时person0和cread_card0的信息
            DisplayInformation(person0, cread_card0);
            //  输出此时person0和cread_card1的信息
            DisplayInformation(person0, cread_card1);
            //  输出此时person1和cread_card2的信息
            DisplayInformation(person1, cread_card2);

            //  定义此时时间 = 5
            this_time = 5;
            //  判断此时cread_card0是否该还钱
            RepayOrNotRepay(person0, cread_card0);
            //  判断此时cread_card1是否该还钱
            RepayOrNotRepay(person0, cread_card1);
            //  判断此时cread_card2是否该还钱
            RepayOrNotRepay(person1, cread_card2);
            //  输出此时person0和cread_card0的信息
            DisplayInformation(person0, cread_card0);
            //  输出此时person0和cread_card1的信息
            DisplayInformation(person0, cread_card1);
            //  输出此时person1和cread_card2的信息
            DisplayInformation(person1, cread_card2);

            //  定义此时时间 = 6
            this_time = 6;
            //  判断此时cread_card1是否该还钱
            RepayOrNotRepay(person0, cread_card1);
            //  判断此时cread_card2是否该还钱
            RepayOrNotRepay(person1, cread_card2);
            //  输出此时person0和cread_card0的信息
            DisplayInformation(person0, cread_card0);
            //  输出此时person0和cread_card1的信息
            DisplayInformation(person0, cread_card1);
            //  输出此时person1和cread_card2的信息
            DisplayInformation(person1, cread_card2);

            //  定义此时时间 = 8
            this_time = 8;
            //  判断此时cread_card2是否该还钱
            RepayOrNotRepay(person1, cread_card2);
            //  输出此时person0和cread_card0的信息
            DisplayInformation(person0, cread_card0);
            //  输出此时person0和cread_card1的信息
            DisplayInformation(person0, cread_card1);
            //  输出此时person1和cread_card2的信息
            DisplayInformation(person1, cread_card2);
        }
    }
    //  还钱类
    class Repay
    {
        //  信用卡还钱委托
        public delegate void CreCardRepay(Person one_person);
        //  信用卡还钱委托作为事件发送给信用卡欠钱人
        public event CreCardRepay CreCardDebtPeople;
        //  信用卡还钱事件
        public void CreCardRepayEvent(Person one_person)
        {
            if (CreCardDebtPeople != null)
            {
                CreCardDebtPeople(one_person);
            }
        }
    }
    //  人类
    class Person
    {
        //  名字
        public string name;
        //  现金
        public int money;
        //  人类构造函数
        public Person(string new_name)
        {
            name = new_name;
            money = 0;
        }
        //  输出人类的名字和现金
        public void DisplayPerson()
        {
            Console.WriteLine($"name = {name}");
            Console.WriteLine($"money = {money}");
        }
    }
    //  信用卡类
    class CreadCard
    {
        //  持有人名字
        public string person_name;
        //  欠钱金额
        public int loan_money;
        //  还钱时间
        public int repay_time;
        //  信用卡构造函数
        public CreadCard(Person one_person, int apply_card_time)
        {
            person_name = one_person.name;
            loan_money = 20000;
            one_person.money += loan_money;
            repay_time = apply_card_time + 5;
        }
        //  信用卡还钱函数
        public void CreCardRepay(Person one_person)
        {
            one_person.money -= loan_money;
            loan_money -= loan_money;
        }
        //  输出信用卡的持有人名字和欠钱金额和还钱时间
        public void DisplayCreCard()
        {
            Console.WriteLine($"person name = {person_name}");
            Console.WriteLine($"loan_money = {loan_money}");
            Console.WriteLine($"repay_time = {repay_time}");
        }
    }
}
