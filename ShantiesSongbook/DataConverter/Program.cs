using System;
using System.IO;

namespace DataConverter
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Processing started");
            ProcessFile();
        }

        static void ProcessFile()
        {
            using (StreamReader reader = new StreamReader(@"~\..\..\..\..\..\..\testDict.txt")) 
            {
                using (StreamWriter writer = new StreamWriter(@"~\..\..\..\..\..\..\output.json"))
                {
                    ShantyBuilder shantyBuilder = new ShantyBuilder(writer);
                    
                    do
                    {
                        shantyBuilder.ProcessLine(reader.ReadLine());
                    }
                    while(reader.Peek()!= -1);
                }
            }
        }
    }
}
