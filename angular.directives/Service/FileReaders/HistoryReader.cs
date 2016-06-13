using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using angular.directives.Service.FileModels;
using System.IO;
using angular.directives.Service.Helpers;

namespace angular.directives.Service.FileReaders
{
    //1 = Type
    //2 – 7 = Item
    //8 – 12 = AP_FY
    //13 – 17 = FY
    //18 – 28 = Amt
    //29 – 39 = Qty
    public class HistoryReader
    {
        private readonly string _fileContent;
        public HistoryReader(string fileContent)
        {
            _fileContent = fileContent;
        }

        public List<HistoryRow> ProcessFile()
        {
            var rows = new List<HistoryRow>();
            foreach (string line in new LineReader(() => new StringReader(_fileContent)))
            {
                var historyRow = new HistoryRow
                {
                    Type = line.Substring(0, 1),
                    Item = line.Substring(1, 6),
                    ApFY = line.Substring(7, 5),
                    FY = line.Substring(12, 5),
                    Amount = line.Substring(17, 11),
                    Quantity = line.Substring(28, 11)
                };

                rows.Add(historyRow);
            }

            return rows;
        }
    }
}