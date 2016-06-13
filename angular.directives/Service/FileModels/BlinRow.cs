using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angular.directives.Service.FileModels
{
    public class BlinRow
    {

        //BLIN file (row width = 28)
        //1 – 4 = APPN
        // 5 – 10 = Item
        // 11 – 16 = P1_Item
        // 17 – 26 = BLIN

        public virtual string Appn { get; set; }
        public virtual string Item { get; set; }
        public virtual string P1Item { get; set; }
        public virtual string Blin { get; set; }
    }
}