using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angular.directives.Service.FileModels
{
    public class InitSparesRow
    {
        //1 – 4 = APPN
        //5 – 10 = SSN
        //11 – 16 = INIT_SPARE_SSN 
        public virtual string Appn { get; set; }
        public virtual string Ssn { get; set; }
        public virtual string InitSpareSsn { get; set; }
    }
}