const mongoose = require("mongoose");
const { Schema } = mongoose;
const Vendor = new Schema({
    Address_valid_To
        : {
        type: String
    },

    Address_valid_from
        : {
        type: String
    },
    Category
        : {
        type: String
    },
CheckDigit
        :
    {
        type: String
    },
    City
        :
    {
        type: String
    },
    Company_Postal_Code
        :
    {
        type: String
    },
    Con_Auth_Group
        :
    {
        type: String
    },
    Con_Bp_Type
        :
    {
        type: String
    },
    Con_Data_Origin
        :
    {
        type: String
    },
    Con_Print_Format
        :
    {
        type: String
    },
    Country
        :
    {
        type: String
    },
    Date_Founded
        :
    {
        type: String
    },
    Description
        :
    {
        type: String
    },
    Email
        :
    {
        type: String
    },
    Entry_Date
        :
    {
        type: String
    },
    External_Address_No
        :
    {
        type: String
    },
    F_Extension
        :
    {
        type: String
    },
    Fax
        :
    {
        type: String
    },
    First_Name
        :
    {
        type: String
    },
    House_No
        :
    {
        type: String
    },
    IN_Description
        :
    {
        type: String
    },
    Id_Type
        :
    {
        type: String
    },
    Identification_Number
        :
    {
        type: String
    },
    Ind_Description
        :
    {
        type: String
    },
    Industries
        :
    {
        type: String
    },
    Language
        :
    {
        type: String
    },
    Last_Name
        :
    {
        type: String
    },
    Legal_Entity
        :
    {
        type: String
    },
    Legal_Form
        :
    {
        type: String
    },
    Liquidation_Date
        :
    {
        type: String
    },
    Location_No_1
        :
    {
        type: String
    },
    Location_No_2
        :
    {
        type: String
    },
    Name
        :
    {
        type: String
    },
    Not_Es_Acc_Note
        :
    {
        type: String
    },
    Not_Es_Bus_Hs
        :
    {
        type: String
    },
    Not_Es_C_Manage
        :
    {
        type: String
    },
    Not_Es_Corresp
        :
    {
        type: String
    },
    Not_Es_Ipm_T
        :
    {
        type: String
    },
    Not_Es_Mark_Note
        :
    {
        type: String
    },
    Not_Es_N_Log
        :
    {
        type: String
    },
    Not_Es_N_Of_Bus
        :
    {
        type: String
    },
    Not_Es_OutB_Pack
        :
    {
        type: String
    },
    PO_Box
        :
    {
        type: String
    },
    Pay_Acc_Hd
        :
    {
        type: String
    },
    Pay_Acc_Name
        :
    {
        type: String
    },
    Pay_Alias
        :
    {
        type: String
    },
    Pay_B_V_From
        :
    {
        type: String
    },
    Pay_B_V_To
        :
    {
        type: String
    },
    Pay_Bank_Acc
        :
    {
        type: String
    },
    Pay_Bank_Acc_Al
        :
    {
        type: String
    },
    Pay_Bank_key
        :
    {
        type: String
    },
    Pay_CR
        :
    {
        type: String
    },
    Pay_C_Type
        :
    {
        type: String
    },
    Pay_Card_Coll_Auth
        :
    {
        type: Boolean
    },
    Pay_Card_Des
        :
    {
        type: String
    },
    Pay_Card_ID
        :
    {
        type: String
    },
    Pay_Card_Num
        :
    {
        type: String
    },
    Pay_Change_On
        :
    {
        type: String
    },
    Pay_Check_STD
        :
    {
        type: Boolean
    },
    Pay_Coll_Auth
        :
    {
        type: Boolean
    },
    Pay_Con_Key
        :
    {
        type: String
    },
    Pay_Ext_ID
        :
    {
        type: String
    },
    Pay_Fin_Ins
        :
    {
        type: String
    },
    Pay_IBAN
        :
    {
        type: String
    },
    Pay_Id
        :
    {
        type: String
    },
    Pay_Ref_D
        :
    {
        type: String
    },
    Pay_Targ
        :
    {
        type: String
    },
    Phone_No
        :
    {
        type: String
    },
    Postal_Code
        :
    {
        type: String
    },
    Region
        :
    {
        type: String
    },
    Responsible_Institution
        :
    {
        type: String
    },
    Search_Term_1
        :
    {
        type: String
    },
    Search_Term_2
        :
    {
        type: String
    },
    Street
        :
    {
        type: String
    },
    Sts_Arch_F
        :
    {
        type: Boolean
    },
    Sts_Cen_Bloc
        :
    {
        type: Boolean
    },
    Sts_Not_Rele
        :
    {
        type: Boolean
    },
    Supplier_ID
        :
    {
        type: String
    },
    T_Extension
        :
    {
        type: String
    },
    Tech_CR
        :
    {
        type: String
    },
    Tech_Des
        :
    {
        type: String
    },
    Tech_ETR_Date
        :
    {
        type: String
    },
    Tech_ID_Type
        :
    {
        type: String
    },
    Tech_RGN
        :
    {
        type: String
    },
    Tech_Res_Inst
        :
    {
        type: String
    },
    Tech_Valid_From
        :
    {
        type: String
    },
    Tech_Valid_To
        :
    {
        type: String
    },
    Telephone
        :
    {
        type: String
    },
    Text_Number_Long
        :
    {
        type: String
    },
    Identifi_CR
        :
    {
        type: String
    },
    identification_Valid_From
        :
    {
        type: String
    },
    identification_Valid_To
        :
    {
        type: String
    }

})
module.exports = mongoose.model("Vendor", Vendor);