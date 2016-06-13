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
    //5 – 10 = SSN
    //11 – 16 = INIT_SPARE_SSN 
    public class InitSparesReader
    {
        private readonly string _fileContent;
        public InitSparesReader(string fileContent)
        {
            _fileContent = fileContent;
        }

        public List<InitSparesRow> ProcessFile()
        {
            var rows = new List<InitSparesRow>();
            foreach (string line in new LineReader(() => new StringReader(_fileContent)))
            {
                var initSparesRow = new InitSparesRow
                {
                    Appn = line.Substring(0, 4),
                    Ssn = line.Substring(4, 6),
                    InitSpareSsn = line.Substring(10, 6)
                };

                rows.Add(initSparesRow);
            }

            return rows;
        }
    }
}