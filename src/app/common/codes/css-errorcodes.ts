export class CSS_ErrorCodes {
    
    public static readonly FUNCTIONAL_BILLING : string = 'Billing';
    public static readonly FUNCTIONAL_PAYMENT : string = 'Payment';
    public static readonly FUNCTIONAL_QUOTING : string = 'Quoting';
    public static readonly FUNCTIONAL_TOKEN_VALIDATION : string = 'Token Validation';
    
    //Release-0B and Release-O1 
    public static readonly UNABLE_TOPROCESS_THE_REQUEST : string = 'E001';    
    public static readonly SERVICE_ERROR : string = 'E002';  
    public static readonly POLICY_NOT_FOUND : string = 'E012';
        
    
    public static readonly INVALID_POLICY_NUMBER : string = 'V001';  
    public static readonly INVALID_ZIPCODE : string = 'V002';    
    public static readonly INVALID_EMAIL : string = 'V003';    
    public static readonly INVALID_ADDRESS : string = 'V004';
    public static readonly INVALID_PHONE_NUMBER : string = 'V005';  
    public static readonly PAYMENT_DETAILS_ARE_BLANK : string = 'V011';    
    public static readonly BILLING_ADDRESS_ISBLANK: string = 'V013';    
    public static readonly MAILING_ADDRESS_IS_BLANK: string = 'V014'; 
    public static readonly MAILING_ADDRESS_IS_BLANK_QUOTING : string = 'V005';    
    public static readonly PNI_DETAILS_ARE_BLANK: string = 'V016';     
       
    
    
    public static readonly INVALID_CARD_TYPE : string = 'V019';    
    public static readonly INVALID_BANK_ACCOUNT_TYPE: string = 'V020';     
    public static readonly INVALID_BANK_ACCOUNT_NUMBER: string = 'V021';    
    public static readonly INVALID_BANK_ROUTING_NUMBER: string = 'V022';    
    public static readonly INVALID_CARD_NUMBER: string = 'V023';     
    public static readonly INVALID_CARD_CVV: string = 'V024';    
    public static readonly INVALID_CARD_EXPIRY_DATE: string ='V025'; 
    public static readonly INVALID_EXPIRY_DATE_AS_IN_PAST : string = 'V042';   
    public static readonly INVALID_CARD_ZIPCODE: string = 'V026';    
    
    public static readonly INVALID_QUOTEID : string = 'V075';
    //Release-OB //BillPlanChange/Billing Functionality
    
    public static readonly INVALID_BILLPLAN_CHANGE_ACTION : string = 'V028';
    public static readonly INVALID_BILLPLAN_CHANGE_DETAILS : string = 'V029';
    public static readonly RENEWAL_BILLPLAN_CHANGES_INPROGRESS : string = 'V032';
    public static readonly CURRENT_BILLPLAN_DETAILS_BLANK : string = 'V033';
    public static readonly INVALID_FI_CLIENT : string = 'V030';
    public static readonly RENEWAL_BILLPLAN_NO_OVERRIDE : string = 'V041';
    public static readonly NO_CHANGE_BILL_PLAN : string = 'V036';
    public static readonly BILL_PLAN_SHOULD_BE_SAME : string = 'V039';
    public static readonly BILLING_ACCOUNT_IS_BLANK: string = 'V015';
    public static readonly BILLING_CLIENT_IS_BLANK: string = 'V027';
    
    //Release-OB // Payments
    public static readonly NO_CHANGE_DEDUCTION_DAY : string = 'V035';
    public static readonly INVALID_PAYMENT_AMOUNT: string = 'V012';    
    public static readonly DEDUCTION_DAY_SHOULD_BE_SAME : string = 'V038';
    public static readonly NO_CHANGE : string = '2201160';
    public static readonly POLICY_DETAILS_ARE_BLANK : string = 'V031';
    public static readonly INVALID_PAYMENT_DETAILS_CODES : string = 'E008';
    public static readonly INVALID_PAYMENT_DETAILS : string = 'E004';
    public static readonly UNABLE_TO_PROCESS_THE_PAYMENT_REQUEST_CODES : string = 'E009';
    public static readonly UNABLE_TO_PROCESS_THE_PAYMENT_REQUEST : string = 'E005';
    public static readonly DUPLICATE_PAYMENT_CODES : string = 'E010';
    public static readonly DUPLICATE_PAYMENT : string = 'E006';
    public static readonly PAYMENT_DECLINED_CODES : string = 'E011';
    public static readonly PAYMENT_DECLINED : string = 'E007';
    public static readonly EXCEEDED_MAXIMUM_ALLOWED_PER_TERM : string = 'E003';
    public static readonly INVALID_TOTAL_PAYMENT_AMOUNT: string = 'V017';    
    public static readonly INVALID_PAYMENT_METHOD_TYPE: string = 'V018';   
    public static readonly PAYMENT_METHOD_DETAILS_BLANK : string = 'V034';
    public static readonly NO_CHANGE_CREDIT_CARD_EXPIRY_DATE : string = 'V037';
    
    
    public static readonly INVALID_PAYMENT_METHOD_SEQUENCE : string = 'V040';
    public static readonly BILLING_ACCOUNT_NUMBER_IS_BLANK : string = 'V051';  
    public static readonly BILLING_STATUS_CODE_IS_BLANK : string = 'V052';
    public static readonly BILLING_STATUS_DESCRIPTION_IS_BLANK : string = 'V053';
    public static readonly POLICY_STATUS_IS_INVALID : string = 'V054';     
    public static readonly INVALID_BILLING_DETAILS : string = 'V055';  
    public static readonly INVALID_PNI_DETAILS : string ='V056';
    public static readonly INVALID_TOKEN_ID : string = 'V057';
    public static readonly INVALID_DOCID : string = 'V058';
    public static readonly INVALID_MEMBERSHIP : string = 'V059';
    public static readonly INVALID_MEMBERSHIP_PRICE : string = 'V006';
    //Release-0B Ends
    
    //Release -1 /VehicleLookUp Functionality
    
    public static readonly YEAR_IS_INVALID : string = 'V060';
    public static readonly MAKE_NUM_IS_BLANK : string = 'V061';
    public static readonly MODEL_NUM_IS_BLANK : string = 'V062';
    public static readonly TRIM_NUM_IS_BLANK : string = 'V063';
    public static readonly VIN_IS_INVALID : string = 'V064';
    public static readonly INVALID_FUNCTION_TYPE : string = 'V065';
    public static readonly VEHICLE_OUTPUT_IS_BLANK : string = 'V066';
    public static readonly INPUT_DETAILS_ARE_BLANK : string = 'V070';
    public static readonly SEARCH_CRITERIA_DETAILS_ARE_BLANK : string = 'V071';
    public static readonly NAME_DETAILS_ARE_BLANK : string = 'V072';
    public static readonly AGENT_DETAILS_ARE_BLANK : string = 'V073';
    public static readonly DETAILS_FOR_RECALCULATE_ARE_BLANK : string = 'V074';
    
    // Release-1 /GW ErrorCodes-AutoQuote/HomeQuote Functionality
    
    public static readonly GW_SECURITY_ERROR : string ='G600';
    public static readonly GW_DTO_VALIDATION_ERROR : string ='G601';
    public static readonly GW_UNDERWRITING_ERROR: string ='G602';
    public static readonly GW_ENTITY_NOT_FOUND_ERROR: string ='G603';
    public static readonly GW_INVALID_SESSION: string ='G604';
    public static readonly GW_ILLEGAL_STATE_ERROR : string ='G605';
    public static readonly GW_DUPLICATE_ENTITY_ERROR: string ='G606';
    public static readonly GW_SESSION_TIMEOUT: string ='G607';
    public static readonly GW_ENTITY_VALIDATION_ERROR: string ='G608';
    public static readonly GW_ENTITY_PERMISSION_ERROR: string ='G609';
    public static readonly GW_ILLEGAL_CONTENTTYPE_ERROR: string ='G610';
    public static readonly GW_BLOCK_QUOTE_UNDERWRITING_ERROR: string ='G611';
    public static readonly GW_JWT_PROCESSOR_INITIALIZATION_ERROR: string ='G612';       
    public static readonly GW_JWT_PROCESS_ERROR: string ='G613';       
    public static readonly GW_UAA_CONNECTION_ERROR: string ='G614';       
    public static readonly GW_UAA_RESPONSE_PROCESSING_ERROR: string ='G615';       
    public static readonly GW_ENROLLMENT_INFO_VALIDATION_ERROR: string ='G616';       
    public static readonly GW_UAA_CONFLICT_ERROR: string ='G617';       
    public static readonly GW_UAA_AUTHORIZATION_ERROR: string ='G618';    
    
    public static readonly FUNCTION_TYPE_IS_BLANK : string = 'V620';
    public static readonly FUNCTION_TYPE_IS_INVALID : string = 'V621';
    
    public static readonly HOME_QUOTE_FUNCTION_TYPE_IS_INVALID : string ='V622';
    public static readonly HOME_QUOTE_FUNCTION_TYPE_IS_BLANK : string ='V623';
    
    public static readonly POLICY_BILLING_FUNCTION_TYPE_IS_INVALID : string ='V624';
     public static readonly AUTO_BIND_FAILURE : string = 'E014'; 
    
    //Release - 01 Additional Interest Error
    public static readonly LINE_OF_BUSINESS_IS_BLANK : string = 'V090';
    //Release - 01 Membership validation errors
    public static readonly MEMBERSHIP_INFO_IS_BLANK : string ='V100';
    public static readonly MEMEBERSHIP_NUMBER_IS_BLANK: string ='V101';
    public static readonly PRIMARY_MEMEBER_INFO_IS_BLANK: string ='V102';
    public static readonly ASSOCIATE_MEMEBERSHIP_NUMBER_IS_BLANK: string ='V103';
    public static readonly AGENT_NUMBER_IS_BLANK: string ='V109';
    public static readonly AGENT_NUMBER_TYPE_IS_INVALID : string = 'V110';
    //Duplicate Ones -Commented Out
    
    //public static readonly INVALID_POLICYNUMBER : string = 'V001';  
    //public static readonly CREDIT_DEBITCARD_TYPE: string = 'V019';    
    //public static readonly BANK_ACCOUNT_TYPE: string = 'V020';     
    //public static readonly BANK_ACCOUNT_NUMBER: string = 'V021';
    //public static readonly BANK_ROUTING_NUMBER: string = 'V022';    
    //public static readonly CREDIT_DEBITCARD_NUMBER: string = 'V023';     
    //public static readonly CREDIT_DEBITCARD_CCV: string = 'V024';    
    //public static readonly CREDIT_DEBITCARD_EXPIRY_DATE: string ='V025';
    //public static readonly CREDIT_DEBITCARD_ZIPCODE: string = 'V026';
    
    
}