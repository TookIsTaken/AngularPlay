using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angular.directives.Service.FileModels
{
    public class CurrentRow
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

        public virtual string Appn { get; set; }
        public virtual string Item {get; set;}

                public virtual string Mdep {get; set;}
                    public virtual string Cmd {get; set;}
                        public virtual string Compo {get; set;}
                            public virtual string DollarType {get; set;}
                                public virtual string ToaFlag {get; set;}
                                    public virtual string StartFy {get; set;}
                                        public virtual string DolAmt1 {get; set;}
                                            public virtual string DolAmt2 {get; set;}
                                                public virtual string DolAmt3 {get; set;}
                                                    public virtual string DolAmt4 {get; set;}
                                                        public virtual string DolAmt5 {get; set;}
                                                            public virtual string DolAmt6 {get; set;}
                                                                public virtual string DolAmt7 {get; set;}
                                                                    public virtual string DolAmt8 {get; set;}
                                                                        public virtual string DolAmt9 {get; set;}
                                                                            public virtual string QtyAmt1 {get; set;}
                                                                                public virtual string QtyAmt2 {get; set;}
                                                                                    public virtual string QtyAmt3 {get; set;}
                                                                                        public virtual string QtyAmt4 {get; set;}
                                                                                            public virtual string QtyAmt5 {get; set;}
                                                                                                public virtual string QtyAmt6 {get; set;}
                                                                                                    public virtual string QtyAmt7 {get; set;}
                                                                                                        public virtual string QtyAmt8 {get; set;}
                                                                                                        public virtual string QtyAmt9 { get; set; }
                                                            

    }
}