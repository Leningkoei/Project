using System;

namespace _01
{
    class Program
    {
        static void Main(string[] args)
        {
            Album album0 = new Album(5);
            Photo zeroth = new Photo("A");
            Photo first = new Photo("B");
            Photo second = new Photo("C");
            Photo third = new Photo("D");
            Photo fourth = new Photo("E");

            album0[0] = zeroth;
            album0[1] = first;
            album0[2] = second;
            album0[3] = third;
            album0[4] = fourth;

            Photo objPhoto0 = album0[2];
            Console.WriteLine(objPhoto0.Title);
            Photo objPhoto1 = album0["B"];
            Console.WriteLine(objPhoto1.Title);
        }
    }

    public class Photo
    {
        string _title;
        public Photo(string title)
        {
            this._title = title;
        }
        public string Title
        {
            get
            {
                return _title;
            }
        }
    }
    class Album
    {
        Photo[] photos;
        public Album(int capacity)
        {
            photos = new Photo[capacity];
        }
        public Photo this[int index]
        {
            get
            {
                if (index < 0 || index >= photos.Length)
                {
                    Console.WriteLine("索引无效");
                    return null;
                }
                return photos[index];
            }
            set
            {
                if (index < 0 || index >= photos.Length)
                {
                    Console.WriteLine("索引无效");
                    return;
                }
                photos[index] = value;
            }
        }
        public Photo this[string title]
        {
            get
            {
                foreach(Photo p in photos)
                {
                    if (p.Title == title)
                    {
                        return p;
                    }
                }
                Console.WriteLine("未找到");
                return null;
            }
        }
    }
}
