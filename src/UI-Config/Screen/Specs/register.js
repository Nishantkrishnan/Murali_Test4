const register= {
 items: [
   {
     type: "Header",
     props: {
       label: "Registration",
       horozintalAlign: "center",
       verticalAlign:"center"
     }
   },
   {
     type: "CardC",
     props: {
       color: "grey",
       horozintalAlign: "left",
     },
     children: {
       items: [
         {
           type: "TexField",
           props:{
             inputType:"text",
             label:"Name",
             name:"name"
           }
         },
         {
           type: "TexField",
           props:{
             inputType:"email",
             label:"Email",
             name:"email"
           }
         },
         {
           type: "TexField",
           props:{
             inputType:"number",
             label:"Mobile",
             name:"Message"
           }
         },
         {
           type: "RadioGroups",
           props:{
             label:"Gender",
             name:"gender",
             options:[
               {
                 label:"Male"
               },
               {
                 label:"Female"
               }
             ]
           }
         },
         {
           type: "TexField",
           props:{
             inputType:"password",
             label:"Password",
             name:"password"
           }
         },
         {
           type: "TexField",
           props:{
             inputType:"password",
             label:"Confirm Password",
             name:"confirmPassword"
           }
         },
         {
           type: "Buttons",
           props:{
             label:"Register"
           }
         }
       ]
     }
   }
 ]
}


export default register;
