using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angular.directives.Service.FileModels
{
    public class R1LineNumberRow
    {
        //R1 Line Number file (row width = 18)
        //1 – 3 = BLIN
        //4 – 6 = BA
        //7 – 16 = OSDPE
        public virtual string Blin { get; set; }
        public virtual string BudgetActivity { get; set; }
        public virtual string OsdProgramElement { get; set; }
    }
}