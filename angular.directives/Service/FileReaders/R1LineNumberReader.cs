using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using angular.directives.Service.FileModels;
using System.IO;
using angular.directives.Service.Helpers;

namespace angular.directives.Service.FileReaders
{
    //1 – 3 = BLIN
    //4 – 6 = BA
    //7 – 16 = OSDPE
    public class R1LineNumberReader
    {
        private readonly string _fileContent;
        public R1LineNumberReader(string fileContent)
        {
            _fileContent = fileContent;
        }

        public List<R1LineNumberRow> ProcessFile()
        {
            var rows = new List<R1LineNumberRow>();
            foreach (string line in new LineReader(() => new StringReader(_fileContent)))
            {
                var r1LineNumberRow = new R1LineNumberRow
                {
                    Blin = line.Substring(0, 3),
                    BudgetActivity = line.Substring(3, 3),
                    OsdProgramElement = line.Substring(6, 10)
                };

                rows.Add(r1LineNumberRow);
            }

            return rows;
        }
    }
}