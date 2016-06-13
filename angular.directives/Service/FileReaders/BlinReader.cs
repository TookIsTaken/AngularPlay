using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using angular.directives.Service.FileModels;
using System.IO;
using angular.directives.Service.Helpers;

namespace angular.directives.Service.FileReaders
{
    //1 – 4 = APPN
    // 5 – 10 = Item
    // 11 – 16 = P1_Item
    // 17 – 26 = BLIN
    public class BlinReader
    {
        private readonly string _fileContent;
        public BlinReader(string fileContent)
        {
            _fileContent = fileContent;
        }

        public List<BlinRow> ProcessFile()
        {
            var rows = new List<BlinRow>();
            foreach (string line in new LineReader(() => new StringReader(_fileContent)))
            {
                var blinRow = new BlinRow
                {
                    Appn = line.Substring(0, 4),
                    Item = line.Substring(4, 6),
                    P1Item = line.Substring(10, 6),
                    Blin = line.Substring(16, 10)                   
                };

                rows.Add(blinRow);
            }

            return rows;
        }
    }
}