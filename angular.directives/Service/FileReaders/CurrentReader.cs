using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using angular.directives.Service.FileModels;
using System.IO;
using angular.directives.Service.Helpers;

namespace angular.directives.Service.FileReaders
{

    //Current file (row width = 227)
    //1 – 4 = APPN
    //5 – 10 = item
    //11 – 14 = MDEP
    //15 – 17 = CMD
    //18 = COMPO
    //19-22 = DOLLAR_TYPE
    //23 = TOA FLAG
    //24 – 27 = STARTFY
    //28 – 38 = Dol_Amt1
    //39 – 49 = Dol_Amt2
    //50 – 60 = Dol_Amt3
    //61 – 71 = Dol_Amt4
    //72 – 82 = Dol_Amt5
    //83 – 93 = Dol_Amt6
    //94 – 104 = Dol_Amt7
    //105 – 115 = Dol_Amt8
    //116 – 126 = Dol_Amt9
    //127 – 137 = Qty_Amt1
    //138 – 148 = Qty_Amt2
    //149 – 159 = Qty_Amt3
    //160 – 170 = Qty_Amt4
    //171 – 181 = Qty_Amt5
    //182 – 192 = Qty_Amt6
    //193 – 203 = Qty_Amt7
    //204 – 214 = Qty_Amt8
    //215 – 225 = Qty_Amt9 
    public class CurrentReader
    {
        private readonly string _fileContent;
        public CurrentReader(string fileContent)
        {
            _fileContent = fileContent;
        }

        static int Main(string[] args)
        {
            
            var testData = "ACFTA00002FL6P5E01BASEY2013          0          0          0          0          0      92694     111806      58724      27662          0          0          0          0          0          0          0          0          0\n" +
"ACFTA00005FL6P5E01BASEY2013     376857     437143     238081     270436      55388      10806          0          0          0         15         15         19         15          0          0          0          0          0\n" +
"ACFTA00005FL6P5E01MSUPY2013          0      63404          0      16537          0          0          0          0          0          0          0          0          2          0          0          0          0          0\n" +
"ACFTA00010       1BASEY2013      -6699          0          0          0          0      -2793      -2848      -2905      -2816        -61          0          0          0          0          0          0          0          0\n" +
"ACFTA00010       2BASEY2013       5668          0          0          0          0       2095       2136       2179       2112         51          0          0          0          0          0          0          0          0\n";


            var currentReader = new CurrentReader(testData);
            currentReader.ProcessFile();
            return 0;
        }


        public List<CurrentRow> ProcessFile()
        {
            var rows = new List<CurrentRow>();
            foreach (string line in new LineReader(() => new StringReader(_fileContent)))
            {
                var currentRow = new CurrentRow
                {
                    Appn = line.Substring(0, 4),
                    Item = line.Substring(4, 6),
                    Mdep = line.Substring(10, 4),
                    Cmd = line.Substring(14, 3),
                    Compo = line.Substring(17, 1),
                    DollarType = line.Substring(18, 4),
                    ToaFlag = line.Substring(22, 1),
                    StartFy = line.Substring(23, 4),
                    DolAmt1 = line.Substring(27, 11),
                    DolAmt2 = line.Substring(38, 11),
                    DolAmt3 = line.Substring(49, 11),
                    DolAmt4 = line.Substring(60, 11),
                    DolAmt5 = line.Substring(71, 11),
                    DolAmt6 = line.Substring(82, 11),
                    DolAmt7 = line.Substring(93, 11),
                    DolAmt8 = line.Substring(104, 11),
                    DolAmt9 = line.Substring(115, 11),
                    QtyAmt1 = line.Substring(126, 11),
                    QtyAmt2 = line.Substring(137, 11),
                    QtyAmt3 = line.Substring(148, 11),
                    QtyAmt4 = line.Substring(159, 11),
                    QtyAmt5 = line.Substring(170, 11),
                    QtyAmt6 = line.Substring(181, 11),
                    QtyAmt7 = line.Substring(192, 11),
                    QtyAmt8 = line.Substring(203, 11),
                    QtyAmt9 = line.Substring(214, 11)
                };

                rows.Add(currentRow);
            }

            return rows;
        }

    }
}