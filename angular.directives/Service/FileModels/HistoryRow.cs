using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angular.directives.Service.FileModels
{
    public class HistoryRow
    {
        //History file (row width = 41)
        //1 = Type
        //2 – 7 = Item
        //8 – 12 = AP_FY
        //13 – 17 = FY
        //18 – 28 = Amt
        //29 – 39 = Qty

        public virtual string Type { get; set; }
        public virtual string Item { get; set; }
        public virtual string ApFY { get; set; }
        public virtual string FY { get; set; }
        public virtual string Amount { get; set; }
        public virtual string Quantity { get; set; }

    }
}